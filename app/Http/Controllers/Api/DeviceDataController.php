<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Alarm;
use App\Models\IOSlave;

class DeviceDataController extends Controller
{
    public function handleDeviceData(Request $request)
    {
       $rawData = $request->data;
       
       $data= $this->parsePayload($rawData);

       $this->processIncomingData($data);
       
       return $data;
   }
   
   
   function parsePayload($payload) {
       // Split the payload into parts by commas
       $dataParts = explode(',', $payload);
       
       // Map the payload to specific variables
       $parsedData = [
           'start_of_frame' => $dataParts[0] ?? null,
           'imei' => $dataParts[1] ?? null,
           'firmware_version' => $dataParts[2] ?? null,
           'rtc_time' => $dataParts[3] ?? null,
           'gps_time' => $dataParts[4] ?? null,
           'gnss_status' => $dataParts[5] ?? null,
           'latitude' => $dataParts[6] ?? null,
           'latitude_cardinal' => $dataParts[7] ?? null,
           'longitude' => $dataParts[8] ?? null,
           'longitude_cardinal' => $dataParts[9] ?? null,
           'gnss_speed' => $dataParts[10] ?? null,
           'gnss_course' => $dataParts[11] ?? null,
           'reserved' => $dataParts[12] ?? null,
           'rssi' => $dataParts[13] ?? null,
           'bit_error_rate' => $dataParts[14] ?? null,
           'adc0_val' => $dataParts[15] ?? null,
           'digital_input' => [
               'di1_val' => $dataParts[17] ?? null,
               'di2_val' => $dataParts[18] ?? null,
           ],
           'analog_input' => [
               'adc1_val' => $dataParts[20] ?? null,
               'adc2_val' => $dataParts[21] ?? null,
           ],
           'modbus_data' => $this->extractModbusData($dataParts),
           'ble_data' => $this->extractBLEData($dataParts),
           'counter' => $dataParts[array_key_last($dataParts) - 1] ?? null,
           'end_of_frame' => $dataParts[array_key_last($dataParts)] ?? null,
       ];
   
       return $parsedData;
   }
   
   
   function extractModbusData($dataParts) {
       $modbusStartIndex = array_search('MS', $dataParts);
       $separatorIndex = array_search('|', $dataParts, $modbusStartIndex + 1);
       
       if ($modbusStartIndex === false || $separatorIndex === false) {
           return [];
       }
   
       $modbusData = array_slice($dataParts, $modbusStartIndex + 2, $separatorIndex - $modbusStartIndex - 2);
       $parsedModbus = [];
   
       $parsedModbus['slave_id']=array_shift($modbusData);
       
       foreach ($modbusData as $index => $value) {
           $registerAddress = sprintf("0x%04X", $index);
           $parsedModbus[$registerAddress] = $value;
       }
   
       return $parsedModbus;
   }
   
   function extractBLEData($dataParts) {
       $bleStartIndex = array_search('L', $dataParts);
       $endOfBleIndex = array_search('E', $dataParts);
   
       if ($bleStartIndex === false || $endOfBleIndex === false) {
           return [];
       }
   
       $bleData = array_slice($dataParts, $bleStartIndex + 1, $endOfBleIndex - $bleStartIndex - 1);
       return $bleData;
   }


    //Notification

     public function processIncomingData($parsedData)
     {
       
        $incomingData = $parsedData; 

        $slaveId = $incomingData['modbus_data']['slave_id'] ?? null;

        $ioSlave = IOSlave::where('slave_device_id', $slaveId)->first();

        if (!empty($ioSlave)&&!empty($incomingData)){
            $di1Status = $incomingData['digital_input']['di1_val'];
            $di2Status = $incomingData['digital_input']['di2_val'];
            $dac1Status = $incomingData['analog_input']['adc1_val'];
            $adc2Status = $incomingData['analog_input']['adc2_val'];
            $alarm= $incomingData['modbus_data']['0x0009'];




            if ($di1Status == 1 || $di2Status == 1 ||  $dac1Status==1 || $adc2Status=1 ||$alarm==0xFFFF) {
                $newStatus = 'alarm'; 
            } else {
                $newStatus = 'normal'; 
            }

            // $ioSlave->mobus_data =!empty($incomingData['modbus_data'])?json_encode($incomingData['modbus_data']):null;
            $ioSlave->io_device_status = $newStatus;
            $ioSlave->save();

            
            if ($newStatus === 'alarm') {
                $message = 'An alarm has been triggered for ' . $ioSlave->slaveDevice->slave_device_name;

                Alarm::create([
                    'modbus_data' => !empty($incomingData['modbus_data'])?json_encode($incomingData['modbus_data']):null,
                    'ioslave_id' => $ioSlave->id,
                    'message' => $message,
                ]);
            }
        } 
    }

}
