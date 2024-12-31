@section('meta_title')
    Device Type Master | Fire Alarm
@endsection
@extends('Admin.Layouts.layout')
@section('content')

    <div class="content-page">
        <div class="content">
            <div class="container-fluid">


                <div class="row">
                    <div class="mb-2 justify-content-between d-flex align-items-center">
                        <h4 class="mt-0 header-title"> {{!empty($device)?"Edit":"Update"}} Device</h4>
                    </div>
                    <div class="col-4">
                        <div class="card department-card">
                            <div class="card-body">


                                <form action="{{ route('master.device.store') }}" method="post" id="add-banner-form" enctype="multipart/form-data">
                                    @csrf
                                    <input type="hidden" class="form-control" id="id" name="id" value="{{!empty($device)?$device->id:''}}">

                                    <div class="mb-3">
                                        <label for="device_id" class="form-label">Device ID</label>
                                        <input type="text" class="form-control" id="device_id" name="device_id"
                                            placeholder="Device ID" value="{{ old('device_id', !empty($device) ? $device->device_id : '') }}">
                                        @if($errors->has('device_id'))
                                            <span class="text-danger"><b>* {{$errors->first('device_id')}}</b></span>
                                        @endif
                                    </div>

                                    <button class="btn btn-success"  type="submit"> {{!empty($device)?"Update":"Add"}} </button>

                                    <button type="reset" class="btn btn-danger reset-button">Cancel </button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="card">
                            <div class="card-body table-responsive department-card">
                                <div id="cims_data_table_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
                                   
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <table id="cims_data_table"
                                                class="table table-bordered dt-responsive w-100 dataTable no-footer dtr-inline"
                                                aria-describedby="cims_data_table_info" style="width: 1038px;">
                                                <thead class="table-light">
                                                    <tr role="row">
                                                            <th  class="text-center">Sr. No.</th>
                                                            <th  class="text-center">Device ID</th>
                                                            <th  class="text-center">Status</th>
                                                            <th  class="text-center"> Action</th>    
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