@section('meta_title') Device | Fire alram @endsection
@extends('Admin.Layouts.layout')
@section('css')
@endsection

@section('content')
<div class="content-page">
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="mb-2 justify-content-between d-flex align-items-center">
                        <h3 style="color:red">Device</h3>
                        <a href="{{ url('admin/device/add') }}" class="btn btn-success waves-effect waves-light add-btn" ><span class="btn-label"> <i class="fas fa-plus "></i></span>Add</a>
                    </div>
                    <div class="card">
                        <div class="card-body table-responsive department-card">
                            <table id="cims_data_table" class="table table-bordered table-bordered dt-responsiv w-100 ">
                                <thead class="table-light">
                                    <tr role="row">
                                        <th>Sr no</th>
                                        <th>Customer</th>
                                        <th>Location</th>
                                        <th>Mobile No.</th>
                                        <th>Email</th>
                                        <th>Device Type</th>
                                        <th>Device ID</th>
                                        <th>Created At</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>

                                <tr>
                                    <td>1</td>
                                    <td>Codepix</td>
                                    <td>Phursungi Pune</td>
                                    <td>+91-8857945412</td>
                                    <td>codepix@gmail.com</td>
                                    <td>Smoke Detector</td>
                                    <td><a href="#">TOR2314233</a></td>
                                    <td>12/11/2024 16:14:45</td>
                                    
                                    <td><a href="javascript:void(0)" data-id="4" data-table="role_privileges" data-flash="Status Changed Successfully!" class="change-status"><i class="fa fa-toggle-on tgle-on  status_button" aria-hidden="true" title=""></i></a></td>

                                    <td>
                                        <a href="http://127.0.0.1:8000/admin/roles-privileges/edit/4"> <button type="button" data-id="4" class="btn btn-warning btn-xs Edit_button" title="Edit"><i class="mdi mdi-pencil"></i></button></a> 
                                        <a href="javascript:void;" data-id="4" data-table="role_privileges" data-flash="Roles And Privileges Deleted Successfully!" class="btn btn-danger delete btn-xs" title="Delete"><i class="mdi mdi-trash-can"></i></a>
                                   </td>
                                </tr>


                                <tr>
                                    <td>2</td>
                                    <td>Fire Alarm</td>
                                    <td>Mumbai</td>
                                    <td>+91-8857945412</td>
                                    <td>fire@gmail.com</td>
                                    <td>Smoke Detector</td>
                                    <td><a href="#">TOR2314234</a></td>
                                    <td>12/11/2024 16:14:45</td>
                                    <td><a href="javascript:void(0)" data-id="4" data-table="role_privileges" data-flash="Status Changed Successfully!" class="change-status"><i class="fa fa-toggle-on tgle-on  status_button" aria-hidden="true" title=""></i></a></td>

                                    <td>
                                        <a href="http://127.0.0.1:8000/admin/roles-privileges/edit/4"> <button type="button" data-id="4" class="btn btn-warning btn-xs Edit_button" title="Edit"><i class="mdi mdi-pencil"></i></button></a> 
                                        <a href="javascript:void;" data-id="4" data-table="role_privileges" data-flash="Roles And Privileges Deleted Successfully!" class="btn btn-danger delete btn-xs" title="Delete"><i class="mdi mdi-trash-can"></i></a>
                                   </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Tor.ai</td>
                                    <td>Navi Mumbai</td>
                                    <td>+91-8857945412</td>
                                    <td>tor.ai@gmail.com</td>
                                    <td>Smoke Detector</td>
                                    <td><a href="#">TOR2314235</a></td>
                                    <td>12/11/2024 16:14:45</td>
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

@endsection



