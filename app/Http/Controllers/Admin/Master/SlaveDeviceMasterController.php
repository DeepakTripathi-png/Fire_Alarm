<?php

namespace App\Http\Controllers\Admin\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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

class SlaveDeviceMasterController extends Controller
{
    public function index(){
        $role_id = Auth::guard('master_admins')->user()->role_id;
        $RolesPrivileges = Role_privilege::where('id', $role_id)->where('status', 'active')->select('privileges')->first();
        if(!empty($RolesPrivileges) && str_contains($RolesPrivileges, 'device_type_master_view')){
            return view('Admin.Master.slave_device_master');
        }else{
            return redirect()->back()->with('error', 'Sorry, You Have No Permission For This Request!'); 
        }
       
    }
}
