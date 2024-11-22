@section('meta_title') Map Device | Fire Alarm @endsection
@extends('Admin.Layouts.layout')
@section('content')
<style>
.card-body {
    flex: 1 1 auto;
    padding: 1rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    border-radius: 0.5rem;
    width: 100%;
}    
</style>    
<div class="content-page">
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="mb-2 justify-content-between d-flex align-items-center">
                   

                        <div class="mb-2 justify-content-between d-flex align-items-center">
                            <h4 class="mt-0 header-title">Map Site</h4>
                        </div>
                        <a href="{{ url()->previous() }}" class="btn btn-secondary waves-effect waves-light add-btn"><span class="btn-label"> <i class="fas fa-long-arrow-alt-left"></i></span>Back</a>
                    </div>
                    <div class="card department-card">
                        <div class="card-body">
                            
                            <!-- <form action="#" method="post">
                                @csrf
                                <div class="row">
                                   
                                    <div class="col-12">
                                        <h5 class="mb-3">Device Identification</h5>
                                        <div class="row">
                                            <div class="mb-3 col-6">
                                                <label for="device_name" class="form-label">Device Name</label>
                                                <input type="text" class="form-control" id="device_name" name="device_name" placeholder="Enter device name">
                                            </div>
                                            <div class="mb-3 col-6">
                                                <label for="device_type" class="form-label">Device Type</label>
                                                <select class="form-select" id="device_type" name="device_type">
                                                    <option value="">Select Type</option>
                                                    <option value="Smoke Detector">Smoke Detector</option>
                                                    <option value="Heat Sensor">Heat Sensor</option>
                                                    <option value="Alarm Bell">Alarm Bell</option>
                                                    <option value="Control Panel">Control Panel</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mb-3 col-6">
                                                <label for="device_model" class="form-label">Device Model</label>
                                                <input type="text" class="form-control" id="device_model" name="device_model" placeholder="Enter model number">
                                            </div>
                                            <div class="mb-3 col-6">
                                                <label for="serial_number" class="form-label">Serial Number</label>
                                                <input type="text" class="form-control" id="serial_number" name="serial_number" placeholder="Enter serial number">
                                            </div>
                                        </div>
                                    </div>

                                   
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
                                    </div>


                               
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label for="description" class="form-label">Description</label>
                                            <textarea class="form-control" id="description" name="description" rows="3" placeholder="Additional details about the device"></textarea>
                                        </div>
                                    </div>

                                  
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-success">Submit</button>
                                        <button type="reset" class="btn btn-danger">Cancel</button>
                                    </div>
                                </div>
                            </form> -->


                            <form action="#" method="post">
                                @csrf
                                <div class="row">
                                    <!-- Customer Information -->
                                    <div class="col-12">
                                        <h5 class="mb-3">Customer Information</h5>
                                        <div class="mb-3">
                                            <label for="customer_id" class="form-label">Select Customer</label>
                                            <select class="form-select" id="customer_id" name="customer_id">
                                                <option value="">Select Customer</option>
                                                <option value="1">John Doe</option>
                                                <option value="2">Jane Smith</option>
                                                <option value="3">Acme Corporation</option>
                                                <option value="4">XYZ Industries</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Site Information -->
                                    <div class="col-12">
                                        <h5 class="mb-3">Site Information</h5>
                                        <div class="mb-3">
                                            <label for="site_id" class="form-label">Select Site</label>
                                            <select class="form-select" id="site_id" name="site_id">
                                                <option value="">Select Site</option>
                                                <option value="101">Site A</option>
                                                <option value="102">Site B</option>
                                                <option value="103">Site C</option>
                                                <option value="104">Site D</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Mapping Description -->
                                    <div class="col-12">
                                        <h5 class="mb-3">Mapping Description</h5>
                                        <div class="mb-3">
                                            <label for="mapping_description" class="form-label">Description</label>
                                            <textarea class="form-control" id="mapping_description" name="mapping_description" rows="3" placeholder="Provide details about the mapping"></textarea>
                                        </div>
                                    </div>

                                    <!-- Buttons -->
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-success">Map Site</button>
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