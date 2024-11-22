@section('meta_title')
   Site Master | Fire Alarm
@endsection
@extends('Admin.Layouts.layout')
@section('content')

    <div class="content-page">
        <div class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="mb-2 justify-content-between d-flex align-items-center">
                        <h4 class="mt-0 header-title">Add Site</h4>
                    </div>
                    <div class="col-4">
                        <div class="card department-card">
                            <div class="card-body">

                                <form action="#" method="post" id="add-banner-form" enctype="multipart/form-data">
                                    @csrf
                                    <input type="hidden" class="form-control" id="id" name="id" value="">

                                    <div class="mb-3">
                                        <label for="site_name" class="form-label">Site Name</label>
                                        <input type="text" class="form-control" id="site_name" name="site_name" placeholder="site name">
                                    </div>


                                    <div class="mb-3">
                                        <label for="site_adress" class="form-label">Site Address</label>
                                        <textarea class="form-control" id="site_adress" name="site_adress" rows="3" placeholder="Enter site address"></textarea>
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
                                                            <th  class="text-center">Site Name</th>
                                                            <th  class="text-center">Site Address</th>
                                                            <th  class="text-center">Status</th>
                                                            <th  class="text-center"> Action</th>      




                                                    </tr>
                                                </thead>
                                                <tbody>



                                                    <tr>
                                                        <td>1</td>
                                                        <td>Codepix Solutions Pvt Ltd</td>
                                                        <td>Phursungi, Pune, Maharashtra 412308</td>
                                                        <td><a href="javascript:void(0)" data-id="4" data-table="role_privileges" data-flash="Status Changed Successfully!" class="change-status"><i class="fa fa-toggle-on tgle-on  status_button" aria-hidden="true" title=""></i></a></td>
                    
                                                        <td>
                                                            <a href="http://127.0.0.1:8000/admin/roles-privileges/edit/4"> <button type="button" data-id="4" class="btn btn-warning btn-xs Edit_button" title="Edit"><i class="mdi mdi-pencil"></i></button></a> 
                                                            <a href="javascript:void;" data-id="4" data-table="role_privileges" data-flash="Roles And Privileges Deleted Successfully!" class="btn btn-danger delete btn-xs" title="Delete"><i class="mdi mdi-trash-can"></i></a>
                                                       </td>
                                                    </tr>


                                                    <tr>
                                                        <td>2</td>
                                                        <td>Codepix Solutions Pvt Ltd</td>
                                                        <td>Phursungi, Pune, Maharashtra 412308</td>
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
