<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use React\EventLoop\Factory;
use React\Socket\Server as SocketServer;
use React\Socket\ConnectionInterface;


class ToraiSocketServer extends Command
{
    protected $signature = 'socket:torai';
    protected $description = 'Start the Torai device socket server';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        set_time_limit(0);

        $host = '45.79.126.21'; 
        $port = 9001;           

       
        $loop = Factory::create();

        
        $socketServer = new SocketServer("$host:$port", $loop);  

        
        $this->info("Torai Server listening on port $port");

       
        $socketServer->on('connection', function (ConnectionInterface $conn) {
            $this->info("Client connected: {$conn->getRemoteAddress()}");

           
            $conn->on('data', function ($data) use ($conn) {
                $this->handleClientData($data);
                $conn->write("Data received\n");
            });

            $conn->on('close', function () use ($conn) {
                $this->info("Client disconnected: {$conn->getRemoteAddress()}");
            });
        });

        $loop->run();
    }

    protected function handleClientData($data)
    {
         $this->info("Received data: $data");
        
         $apiUrl = 'https://ioglobe.in/api/handle-device-data';
            
         $apiResponse = $this->postDataToUrl($apiUrl, ['data' => $data]);
         
         $this->info("Response: $apiResponse");
    }
      
      
      protected function postDataToUrl($url, $data)
      {
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    
            $response = curl_exec($ch);
    
            if ($response === false) {
                Log::error('Curl error: ' . curl_error($ch));
                return false;
            }
    
            curl_close($ch);
            return $response;
        }
}
