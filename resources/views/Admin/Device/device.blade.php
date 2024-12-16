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
                        {{-- <h3 style="color:red">Device</h3> --}}

                        <div class="mb-2 justify-content-between d-flex align-items-center">
                            <h4 class="mt-0 header-title">Device</h4>
                        </div>
                        <a href="{{ url('admin/device/add') }}" class="btn btn-success waves-effect waves-light add-btn" ><span class="btn-label"> <i class="fas fa-plus "></i></span>Add</a>
                    </div>
                    <div class="card">
                        <div class="card-body table-responsive department-card">
                            <table id="cims_data_table" class="table table-bordered table-bordered dt-responsiv w-100 ">
                                <thead class="table-light">
                                    <tr role="row">
                                        <th>Sr no</th>
                                        <th>Site Name</th>
                                        <th>Adress</th>
                                        <th>Device Type</th>
                                        <th>Name</th>
                                        <th>Device ID</th>
                                        <th>Date & Time</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>

                                {{-- <tr>
                                    <td>1</td>
                                    <td>Codepix</td>
                                    <td>Phursungi Pune</td>
                                    <td>Smoke Detector</td>
                                    <td>XYZ</td>
                                    <td>TOR2314233</td>
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
                                    <td>Smoke Detector</td>
                                    <td>ZYX</td>
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
                                    <td>Smoke Detector</td>
                                    <td>ZXY</td>
                                    
                                    <td><a href="#">TOR2314235</a></td>
                                    <td>12/11/2024 16:14:45</td>
                                    <td><a href="javascript:void(0)" data-id="4" data-table="role_privileges" data-flash="Status Changed Successfully!" class="change-status"><i class="fa fa-toggle-on tgle-on  status_button" aria-hidden="true" title=""></i></a></td>

                                    <td>
                                        <a href="http://127.0.0.1:8000/admin/roles-privileges/edit/4"> <button type="button" data-id="4" class="btn btn-warning btn-xs Edit_button" title="Edit"><i class="mdi mdi-pencil"></i></button></a> 
                                        <a href="javascript:void;" data-id="4" data-table="role_privileges" data-flash="Roles And Privileges Deleted Successfully!" class="btn btn-danger delete btn-xs" title="Delete"><i class="mdi mdi-trash-can"></i></a>
                                   </td>
                                </tr> --}}
                                                        
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



