{{-- @section('meta_title')
    Device  Master View | IOGLOBE
@endsection
@extends('Admin.Layouts.layout')
@section('content')

    <div class="content-page">
        <div class="content">
            <div class="container-fluid">


                <div class="row">
                    <div class="mb-2 justify-content-between d-flex align-items-center">
                        <h4 class="mt-0 header-title">Master Device View</h4>
                    </div>
                    <div class="col-12">
                        <div class="card department-card">
                            <div class="card-body">
                                <div class="d-flex gap-5">
                                    
                                     <h4 class="mt-0 header-title">Master Device Name: &nbsp; {{!empty($device->device_name)?$device->device_name:''}}</h4>
                                    
                                   
                                      <h4 class="mt-0 header-title">Master Device ID:&nbsp; {{!empty($device->device_id)?$device->device_id:''}}</h4>
                                    
                                </div>

                            <div class="d-flex gap-5 m-5 mb-0">

                                <div class="col-xl-3 col-md-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="header-title mt-0 mb-4">TOTAL ALARM</h4>
                                            <div class="widget-chart-1">
                                                <div class="widget-chart-box-1 float-start" dir="ltr">
                                                    <i class="mdi mdi-alarm-light text-primary display-4"></i>
                                                </div>
                                                <div class="widget-detail-1 text-end">
                                                    <h2 class="fw-normal pt-2 mb-1"> 1 </h2>
                                                    <p class="text-muted mb-1">Total Alarm Count</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                                <div class="col-xl-3 col-md-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="header-title mt-0 mb-4">ACTIVE ALARM</h4>
                                            <div class="widget-chart-1">
                                                <div class="widget-chart-box-1 float-start" dir="ltr">
                                                    <i class="mdi mdi-alarm-light text-danger display-4"></i>
                                                </div>
                                                <div class="widget-detail-1 text-end">
                                                    <h2 class="fw-normal pt-2 mb-1"> 0 </h2>
                                                    <p class="text-muted mb-1">Active Alarm Count</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                                <div class="col-xl-3 col-md-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="header-title mt-0 mb-4">ACK. ALARM</h4>
                                            <div class="widget-chart-1">
                                                <div class="widget-chart-box-1 float-start" dir="ltr">
                                                    <i class="mdi mdi-alarm-light text-warning display-4"></i>
                                                </div>
                                                <div class="widget-detail-1 text-end">
                                                    <h2 class="fw-normal pt-2 mb-1"> 2 </h2>
                                                    <p class="text-muted mb-1">Acknowledge Alarm Count</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>  
                            
                            
                            <div class="card-body table-responsive department-card">
                                       
            
                                <div class="mb-2 justify-content-between d-flex align-items-center">
                                    <h4 class="mt-0 header-title">Slave Device List</h4>
                                </div>
    
                                <table id="cims_data_table_1" class="table table-bordered table-bordered dt-responsiv w-100 ">
                                    <thead class="table-light">
                                        <tr role="row">
                                           
    
                                            <th>Sr no</th>
                                            <th>IO & Slave</th>
                                            <th>Device Image</th>
                                            <th>Connected Device Name</th>
                                            <th>Current Status</th>
                                         
    
    
                                        </tr>
                                    </thead>
    
                                    <tbody>
    
                           
                                        
                                    </tbody>
                                </table>
                                
                            </div>


                            </div>
                        </div>
                        
                    </div>

                    
                </div>

                
            </div>

        </div>
    </div>
@endsection

@section('script')
<script src="{{ URL::asset('admin_panel/controller_js/cn_device_master.js')}}"></script>
    <script>
        $(".system-user").addClass("menuitem-active");
        $(".system-user-list").addClass("menuitem-active");
    </script>
@endsection --}}





@section('meta_title')
    Dashboard | IOGLOBE
@endsection
@extends('Admin.Layouts.layout')
@section('content')



<div class="content-page">
    <div class="content">
        <h4 class="m-1 header-title">Master Device View</h4>
           
        <div class="container-fluid dashboard-cards">

            <div class="d-flex gap-5 m-3">          
                <h5 class="mt-0">Master Device Name: &nbsp; {{!empty($device->device_name)?$device->device_name:''}}</h5>
                <h5 class="mt-0">Master Device ID:&nbsp; {{!empty($device->device_id)?$device->device_id:''}}</h5>
                <input type="hidden" id="device_id" value="{{!empty($device->id)?$device->id:''}}" />
            </div>
     
            
            <div class="row">
                <div class="col-xl-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title mt-0 mb-4">Total Alarm</h4>
                            <div class="widget-chart-1">
                                <div class="widget-chart-box-1 float-start" dir="ltr">
                                    <i class="mdi mdi-alarm-light text-info"></i>
                                </div>
                                <div class="widget-detail-1 text-end">
                                    <h2 class="fw-normal pt-2 mb-1"> 0 </h2>
                                    <p class="text-muted mb-1">Total Alarm Count</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title mt-0 mb-4">Active Alarm</h4>
                            <div class="widget-chart-1">
                                <div class="widget-chart-box-1 float-start" dir="ltr">
                                    <i class="mdi mdi-alarm-light text-warning"></i>
                                </div>
                                <div class="widget-detail-1 text-end">
                                    <h2 class="fw-normal pt-2 mb-1"> 2 </h2>
                                    <p class="text-muted mb-1">Active Alarm Count</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title mt-0 mb-4">ACK. Alarm</h4>
                            <div class="widget-chart-1">
                                <div class="widget-chart-box-1 float-start" dir="ltr">
                                    <i class="mdi mdi-alarm-light text-danger"></i>
                                </div>
                                <div class="widget-detail-1 text-end">
                                    <h2 class="fw-normal pt-2 mb-1"> 2 </h2>
                                    <p class="text-muted mb-1">Acknowledged Alaram Count</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        
        </div>



        {{-- <div class="row">
            <div class="col-12">
                <div class="card">
              
                    <div class="card-body table-responsive department-card">

                        <div class="mb-2 justify-content-between d-flex align-items-center">
                            <h4 class="mt-0 header-title">Latest Event / Alarm</h4>
                        </div>


                        <div class="col-xl-12 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 event-details">
                                            <div>Device ID <a href="#">TOR2314232</a></div>
                                            <div>Device Type: Smoke Detector</div>
                                            <div>Event Type: Miss fire</div>
                                            <div>Location: Phursungi, Pune</div>
                                        </div>
                                        <div class="col-md-6 event-status text-md-right">
                                            <div class="date-time">Date & Time: 12/11/2024 16:14:45</div>
                                            <div class="status status-missfire">Miss fire</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="col-xl-12 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 event-details">
                                            <div>Device ID <a href="#">TOR2314232</a></div>
                                            <div>Device Type: Smoke Detector</div>
                                            <div>Event Type: Miss fire</div>
                                            <div>Location: Phursungi, Pune</div>
                                        </div>
                                        <div class="col-md-6 event-status text-md-right">
                                            <div class="date-time">Date & Time: 12/11/2024 16:14:45</div>
                                            <div class="status status-missfire">Miss fire</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="col-xl-12 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 event-details">
                                            <div>Device ID <a href="#">TOR2314232</a></div>
                                            <div>Device Type: Smoke Detector</div>
                                            <div>Event Type: Miss fire</div>
                                            <div>Location: Phursungi, Pune</div>
                                        </div>
                                        <div class="col-md-6 event-status text-md-right">
                                            <div class="date-time">Date & Time: 12/11/2024 16:14:45</div>
                                            <div class="status status-missfire">Miss fire</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        


            
                        





                    </div>
                </div>


            </div>
        </div>  --}}

        <!-- New -->
        
            <div class="row">
                <div class="col-12">
                    <div class="card">
                  
                 


                        <div class="card-body table-responsive department-card">
                                       
            
                            <div class="mb-2 justify-content-between d-flex align-items-center">
                                <h4 class="mt-0 header-title">Device List</h4>
                            </div>

                            <table id="cims_data_table_1" class="table table-bordered table-bordered dt-responsiv w-100 ">
                                <thead class="table-light">
                                    <tr role="row">
                                       

                                        <th>Sr no</th>
                                        <th>IO & Slave</th>
                                        <th>Device Image</th>
                                        <th>Connected Device Name</th>
                                        <th>Current Status</th>
                                     


                                    </tr>
                                </thead>

                                <tbody>

                         
                                    
                                </tbody>
                            </table>
                            
                        </div>


                        
                    </div>


                </div>
            </div> 
     




    </div>
</div>

 
@endsection

@section('script')
<script src="{{ URL::asset('admin_panel/controller_js/cn_device_master.js')}}"></script>
    <script>
        $(".system-user").addClass("menuitem-active");
        $(".system-user-list").addClass("menuitem-active");
    </script>
@endsection

