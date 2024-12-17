<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SiteMaster;
use App\Models\Device;

class DashboardController extends Controller
{
    public function index(){

        $totalSiteCount=SiteMaster::where('status','active')->count();
        $totalDeviceCount=Device::where('status','!=','delete')->count();
        return view('Admin.Dashboard.index',compact('totalSiteCount','totalDeviceCount'));
    }
}
