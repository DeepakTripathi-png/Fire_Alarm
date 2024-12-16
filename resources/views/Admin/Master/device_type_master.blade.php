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
                        <h4 class="mt-0 header-title">Add Device Type</h4>
                    </div>
                    <div class="col-4">
                        <div class="card department-card">
                            <div class="card-body">


                                <form action="{{ route('master.device_type.store') }}" method="post" id="add-banner-form" enctype="multipart/form-data">
                                    @csrf
                                    <input type="hidden" class="form-control" id="id" name="id" value="{{!empty($deviceType)?$deviceType->id:''}}">

                                    <div class="mb-3">
                                        <label for="device_type" class="form-label">Device Type</label>
                                        <input type="text" class="form-control" id="device_type" name="device_type"
                                            placeholder="Device Type" value="{{ old('device_type', !empty($deviceType) ? $deviceType->device_type : '') }}">
                                        @if($errors->has('device_type'))
                                            <span class="text-danger"><b>* {{$errors->first('device_type')}}</b></span>
                                        @endif
                                    </div>

                                    <button class="btn btn-success"  type="submit"> Submit </button>

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
                                                            <th  class="text-center">Device Type</th>
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
<script src="{{ URL::asset('admin_panel/controller_js/cn_device_type_master.js')}}"></script>
    <script>
        $(".system-user").addClass("menuitem-active");
        $(".system-user-list").addClass("menuitem-active");
    </script>
@endsection
