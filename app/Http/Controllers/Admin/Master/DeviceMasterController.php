<?php

namespace App\Http\Controllers\Admin\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DeviceMaster;
use App\Models\Master\Role_privilege;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Traits\MediaTrait;
use Storage;
use Crypt;
use Arr;
use Str;
use DB;
use Session;


class DeviceMasterController extends Controller
{

    public function index(){
        $role_id = Auth::guard('master_admins')->user()->role_id;
        $RolesPrivileges = Role_privilege::where('id', $role_id)->where('status', 'active')->select('privileges')->first();
        if(!empty($RolesPrivileges) && str_contains($RolesPrivileges, 'device_type_master_view')){
            return view('Admin.Master.device_master');
        }else{
            return redirect()->back()->with('error', 'Sorry, You Have No Permission For This Request!'); 
        }
       
    }

    public function store(Request $request)
    {
    
        $rules = [
            'device_id' => 'required|integer', 
        ];
    
        
        $messages = [
            'device_id.required' => 'Device ID is required.',
            'device_id.integer' => 'Device ID must be an integer.', 
        ];

        // Validate the request
        $validated = $request->validate($rules, $messages);

        $input = [];

        $role_id = Auth::guard('master_admins')->user()->role_id;
        $RolesPrivileges = Role_privilege::where('id', $role_id)->where('status', 'active')->select('privileges')->first();

        if (!empty($request->id)) {
            if (!empty($RolesPrivileges) && str_contains($RolesPrivileges, 'device_master_edit')) {
                $input['device_id'] = $request->device_id;
                $input['modified_by'] = auth()->guard('master_admins')->user()->id;
                $input['modified_ip_address'] = $request->ip();
                DeviceMaster::where('id', $request->id)->update($input);
                return redirect('admin/master/device-master')->with('success', 'Device updated successfully!');
            }else{
                return redirect()->back()->with('error', 'Sorry, You Have No Permission For This Request!');
            }
        } else {
            if (!empty($RolesPrivileges) && str_contains($RolesPrivileges, 'device_master_add')){
                $input['device_id'] = $request->device_id;
                $input['created_by'] = auth()->guard('master_admins')->user()->id;
                $input['created_ip_address'] = $request->ip();
                DeviceMaster::create($input);
              return redirect('admin/master/device-master')->with('success', 'Device added successfully!');
            }else{
                return redirect()->back()->with('error', 'Sorry, You Have No Permission For This Request!');
            }
        }
    }




    public function edit($id){
        try {
            $device= DeviceMaster::where('id',$id)->first();
            return view('Admin.Master.device_master', compact('device'));
        } 
        catch (\Illuminate\Contracts\Encryption\DecryptException $e) {
            return redirect('admin/roles-privileges')->with('error', 'Access Denied !');
        }
    }


    public function data_table(Request $request){

        $device = DeviceMaster::where('status', '!=', 'delete')->orderBy('id','DESC')->select('id','device_id','status')->get();

       

        if ($request->ajax()){
            return DataTables::of($device)
                ->addIndexColumn()
                
                ->addColumn('device_type', function ($row) {
                    return !empty($row->device_id) ? $row->device_id : '' ;
                })


            

                ->addColumn('action', function ($row) {
                    $actionBtn = '';
                    $role_id = Auth::guard('master_admins')->user()->role_id;
                    $RolesPrivileges = Role_privilege::where('id', $role_id)->where('status', 'active')->select('privileges')->first();

                    if (!empty($RolesPrivileges) && str_contains($RolesPrivileges, 'device_type_master_edit')) {
                        $actionBtn .= '<a href="' . url('admin/device-master/edit/' . $row->id ) . '"> <button type="button" data-id="' . $row->id . '" class="btn btn-warning btn-xs Edit_button" title="Edit"><i class="mdi mdi-pencil"></i></button></a>';
                    } else {
                        $actionBtn .= '<a href="javascript:void;"> <button type="button" data-id="' . $row->id . '" class="btn btn-warning btn-xs Edit_button" title="Edit" disabled><i class="mdi mdi-pencil"></i></button></a>';
                    }

                    

                    if (!empty($RolesPrivileges) && str_contains($RolesPrivileges, 'device_type_master_delete')) {
                        $actionBtn .=  ' <a href="javascript:void;" data-id="' . $row->id . '" data-table="device_masters" data-flash="Device Type Deleted Successfully!" class="btn btn-danger delete btn-xs" title="Delete"><i class="mdi mdi-trash-can"></i></a>';
                    } else {
                        $actionBtn .= '<a href="javascript:void;" class="btn btn-danger btn-xs" title="Disabled" style="cursor:not-allowed;" disabled><i class="mdi mdi-trash-can"></i></a>';
                    }
                    return $actionBtn;
                })
                ->addColumn('status', function ($row) {
                    $role_id = Auth::guard('master_admins')->user()->role_id;
                    $RolesPrivileges = Role_privilege::where('id', $role_id)->where('status', 'active')->select('privileges')->first();

                    if (!empty($RolesPrivileges) && str_contains($RolesPrivileges, 'device_type_master_status_change')) {
                        if ($row->status == 'active') {
                            $statusActiveBtn = '<a href="javascript:void(0)"  data-id="' . $row->id . '" data-table="device_masters" data-flash="Status Changed Successfully!"  class="change-status"  ><i class="fa fa-toggle-on tgle-on  status_button" aria-hidden="true" title=""></i></a>';
                            return $statusActiveBtn;
                        } else {
                            $statusBlockBtn = '<a href="javascript:void(0)"  data-id="' . $row->id . '" data-table="device_masters" data-flash="Status Changed Successfully!" class="change-status" ><i class="fa fa-toggle-off tgle-off  status_button" aria-hidden="true" title=""></></a>';
                            return $statusBlockBtn;
                        }
                    } else {
                        if ($row->status == 'active') {
                            $statusActiveBtn = '<a href="javascript:;" disabled ><i class="fa fa-toggle-on tgle-on  status_button" aria-hidden="true" title="Active"></i></a>';
                            return $statusActiveBtn;
                        } else {
                            $statusBlockBtn = '<a href="javascript:;" disabled ><i class="fa fa-toggle-off tgle-off  status_button" aria-hidden="true" title="Inactive"></></a>';
                            return $statusBlockBtn;
                        }
                    }
                })
                // ->rawColumns(['action', 'status'])
                ->rawColumns(['action', 'status','site_address'])
                ->make(true);
        }
    }












}
      
      
         

       
    
    

