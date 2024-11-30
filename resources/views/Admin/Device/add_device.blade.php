@section('meta_title') Add Device | Fire Alarm @endsection
@extends('Admin.Layouts.layout')
@section('content')
  
<div class="content-page">
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="mb-2 justify-content-between d-flex align-items-center">
                        {{-- <h3 style="color:red;">Add Device Add</h3> --}}
                        <div class="mb-2 justify-content-between d-flex align-items-center">
                            <h4 class="mt-0 header-title">Add Device Add</h4>
                        </div>
                        <a href="{{ url()->previous() }}" class="btn btn-secondary waves-effect waves-light add-btn"><span class="btn-label"> <i class="fas fa-long-arrow-alt-left"></i></span>Back</a>
                    </div>
                    <div class="card department-card">
                        <div class="card-body">
                            
                            <form action="{{route('device.store')}}" method="post">
                                @csrf
                                <div class="row">
                                    <!-- Device Identification -->
                                    <div class="col-12">
                                        <h5 class="mb-3">Device Identification</h5>
                                        <div class="row">

                                            <div class="mb-3 col-6">
                                                <label for="site_id" class="form-label">Select Site</label>
                                                <select class="form-select" id="site_id" name="site_id">
                                                    <option value="">Select Site</option>
                                                    @if(!empty($sites))
                                                        @foreach($sites as $site)
                                                        <option value="{{!empty($site->id)?$site->id:''}}">{{!empty($site->site_name)?$site->site_name:''}}</option>
                                                        @endforeach 
                                                    @endif
                                                </select>
                                            </div>



                                            <div class="mb-3 col-6">
                                                <label for="device_type_id" class="form-label">Device Type</label>
                                                <select class="form-select" id="device_type_id" name="device_type_id">
                                                    <option value="">Select Device Type</option>
                                                    @if(!empty($deviceTypes))
                                                    @foreach($deviceTypes as $deviceType)
                                                    <option value="{{!empty($deviceType->id)?$deviceType->id:''}}">{{!empty($deviceType->device_type)?$deviceType->device_type:''}}</option>
                                                    @endforeach 
                                                @endif
                                                </select>
                                            </div>

                                         </div>
                                        <div class="row">

                                            <div class="mb-3 col-6">
                                                <label for="device_id" class="form-label">Device ID</label>
                                                <input type="text" class="form-control" id="device_id" name="device_id" placeholder="Enter device id">
                                            </div>

                                            <div class="mb-3 col-6">
                                                <label for="device_name" class="form-label">Device Name</label>
                                                <input type="text" class="form-control" id="device_name" name="device_name" placeholder="Enter device name">
                                            </div>
                                          
                                        </div>
                                    </div>
{{-- 
                                    <!-- Location Details -->
                                    <div class="col-12">
                                        <h5 class="mb-3">Location Details</h5>
                                        <div class="row">
                                            <div class="mb-3 col-6">
                                                <label for="building_name" class="form-label">Building/Area Name</label>
                                                <input type="text" class="form-control" id="building_name" name="building_name" placeholder="Enter building/area name">
                                            </div>
                                            <div class="mb-3 col-6">
                                                <label for="exact_location" class="form-label">Exact Location</label>
                                                <input type="text" class="form-control" id="exact_location" name="exact_location" placeholder="Enter exact location (e.g., Room 101)">
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Specifications -->
                                    <div class="col-12">
                                        <h5 class="mb-3">Specifications</h5>
                                        <div class="row">
                                            <div class="mb-3 col-6">
                                                <label for="manufacturer" class="form-label">Manufacturer</label>
                                                <input type="text" class="form-control" id="manufacturer" name="manufacturer" placeholder="Enter manufacturer name">
                                            </div>
                                            <div class="mb-3 col-6">
                                                <label for="installation_date" class="form-label">Installation Date</label>
                                                <input type="date" class="form-control" id="installation_date" name="installation_date">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mb-3 col-6">
                                                <label for="service_date" class="form-label">Service/Expiry Date</label>
                                                <input type="date" class="form-control" id="service_date" name="service_date">
                                            </div>
                                            <div class="mb-3 col-6">
                                                <label for="sensitivity" class="form-label">Alarm Sensitivity Level</label>
                                                <select class="form-select" id="sensitivity" name="sensitivity">
                                                    <option value="">Select Level</option>
                                                    <option value="Low">Low</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="High">High</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> --}}

                                    <!-- Device Status -->
                                    <!-- <div class="col-12">
                                        <h5 class="mb-3">Device Status</h5>
                                        <div class="mb-3">
                                            <label for="status" class="form-label">Status</label>
                                            <select class="form-select" id="status" name="status">
                                                <option value="">Select Status</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                                <option value="Under Maintenance">Under Maintenance</option>
                                            </select>
                                        </div>
                                    </div> -->

                                    <!-- Description -->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label for="description" class="form-label">Description</label>
                                            <textarea class="form-control" id="description" name="description" rows="3" placeholder="Additional details about the device"></textarea>
                                        </div>
                                    </div>

                                    <!-- Buttons -->
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-success">Submit</button>
                                        <button type="reset" class="btn btn-danger">Cancel</button>
                                    </div>
                                </div>
                            </form>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('script')
<script>
    $(".system-user").addClass("menuitem-active");
    $(".system-user-list").addClass("menuitem-active");
</script>

<script>
    $(document).ready(function() {
        $("#email").on("keyup", function() {
            $.ajax({
                type: "get",
                url: "{{ url('/admin/system-user/check-user-exist') }}",
                data: {
                    email: $(this).val(),
                    user_id: $("#id").val()
                },
                success: function(response) {
                    if (response.trim() == "true") {
                        $("#submit-btn").attr("disabled", true);
                        $("#email_existence_message").removeClass("d-none");
                        $("#email_existence_message").html("<b>*</b> This Email has already been taken");
                    } else {
                        $("#email_existence_message").addClass("d-none");
                        $("#email_existence_message").html("");
                        $("#submit-btn").removeAttr("disabled");
                    }
                }
            })
        })
    })
</script>
@endsection