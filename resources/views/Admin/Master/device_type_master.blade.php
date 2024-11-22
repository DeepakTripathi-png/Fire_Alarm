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

                                <form action="#" method="post" id="add-banner-form" enctype="multipart/form-data">
                                    @csrf
                                    <input type="hidden" class="form-control" id="id" name="id" value="">

                                    <div class="mb-3">
                                        <label for="device_type" class="form-label">Device Type</label>
                                        <input type="text" class="form-control" id="device_type" name="device_type"
                                            placeholder="Device Type">
                                    </div>

                                    <button class="btn btn-success" name="banner_section" type="submit"> Submit </button>

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

                                                    <tr>
                                                        <td>1</td>
                                                        <td>Fire Alarm</td>
                                                        <td><a href="javascript:void(0)" data-id="4" data-table="role_privileges" data-flash="Status Changed Successfully!" class="change-status"><i class="fa fa-toggle-on tgle-on  status_button" aria-hidden="true" title=""></i></a></td>
                    
                                                        <td>
                                                            <a href="http://127.0.0.1:8000/admin/roles-privileges/edit/4"> <button type="button" data-id="4" class="btn btn-warning btn-xs Edit_button" title="Edit"><i class="mdi mdi-pencil"></i></button></a> 
                                                            <a href="javascript:void;" data-id="4" data-table="role_privileges" data-flash="Roles And Privileges Deleted Successfully!" class="btn btn-danger delete btn-xs" title="Delete"><i class="mdi mdi-trash-can"></i></a>
                                                       </td>
                                                    </tr>


                                                    <tr>
                                                        <td>2</td>
                                                        <td>Pump</td>
                                                       
                                                        
                                                        <td><a href="javascript:void(0)" data-id="4" data-table="role_privileges" data-flash="Status Changed Successfully!" class="change-status"><i class="fa fa-toggle-on tgle-on  status_button" aria-hidden="true" title=""></i></a></td>
                    
                                                        <td>
                                                            <a href="http://127.0.0.1:8000/admin/roles-privileges/edit/4"> <button type="button" data-id="4" class="btn btn-warning btn-xs Edit_button" title="Edit"><i class="mdi mdi-pencil"></i></button></a> 
                                                            <a href="javascript:void;" data-id="4" data-table="role_privileges" data-flash="Roles And Privileges Deleted Successfully!" class="btn btn-danger delete btn-xs" title="Delete"><i class="mdi mdi-trash-can"></i></a>
                                                       </td>
                                                    </tr>



                                                    
                                                    <tr>
                                                        <td>3</td>
                                                        <td>UPS</td>
                                                       
                                                        
                                                        <td><a href="javascript:void(0)" data-id="4" data-table="role_privileges" data-flash="Status Changed Successfully!" class="change-status"><i class="fa fa-toggle-on tgle-on  status_button" aria-hidden="true" title=""></i></a></td>
                    
                                                        <td>
                                                            <a href="http://127.0.0.1:8000/admin/roles-privileges/edit/4"> <button type="button" data-id="4" class="btn btn-warning btn-xs Edit_button" title="Edit"><i class="mdi mdi-pencil"></i></button></a> 
                                                            <a href="javascript:void;" data-id="4" data-table="role_privileges" data-flash="Roles And Privileges Deleted Successfully!" class="btn btn-danger delete btn-xs" title="Delete"><i class="mdi mdi-trash-can"></i></a>
                                                       </td>
                                                    </tr>

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
    <script>
        $(".system-user").addClass("menuitem-active");
        $(".system-user-list").addClass("menuitem-active");
    </script>
@endsection
