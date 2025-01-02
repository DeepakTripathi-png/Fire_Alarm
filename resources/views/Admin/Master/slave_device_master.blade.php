@section('meta_title')
   Slave Device Master | Fire Alarm
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
                                        <label for="device_id" class="form-label">Slave Device Name</label>
                                        <input type="text" class="form-control" id="device_id" name="device_id"
                                            placeholder="Slave Device Name" value="{{ old('device_id', !empty($device) ? $device->device_id : '') }}">
                                        @if($errors->has('device_id'))
                                            <span class="text-danger"><b>* {{$errors->first('device_id')}}</b></span>
                                        @endif
                                    </div>

                                    <div class="mb-3">
                                        <!-- Slave Device Image Upload Field -->
                                        <label for="device_image" class="form-label">Upload Slave Device Image</label>
                                        <input type="file" class="form-control" id="device_image" name="device_image" accept="image/*">
                                        @if($errors->has('device_image'))
                                            <span class="text-danger"><b>* {{$errors->first('device_image')}}</b></span>
                                        @endif
                                    
                                        <!-- Image Preview -->
                                        <div class="mt-3">
                                            <img id="image_preview" src="#" alt="Image Preview" style="max-width: 100px; display: none; border: 1px solid #ddd; padding: 5px;">
                                        </div>
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
                                                            <th  class="text-center">Slave Device Image</th>
                                                            <th  class="text-center">Slave Device Name</th>
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
{{-- <script src="{{ URL::asset('admin_panel/controller_js/cn_device_master.js')}}"></script> --}}
    <script>
        $(".system-user").addClass("menuitem-active");
        $(".system-user-list").addClass("menuitem-active");

        //Image Preview Code Start
        document.getElementById('device_image').addEventListener('change', function (event) {
    const imagePreview = document.getElementById('image_preview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block'; // Show the preview
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = 'none'; // Hide the preview if no file is selected
        imagePreview.src = '#';
    }
});

 //Image Preview Code End

    </script>
@endsection
