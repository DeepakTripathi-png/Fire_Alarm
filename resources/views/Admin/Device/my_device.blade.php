@section('meta_title') Map Device | Fire alram @endsection
@extends('Admin.Layouts.layout')
@section('css')

<style>
    .card {
        display: block;
        min-width: 0;
        word-wrap: break-word;
        background-color: var(--ct-card-bg);
        background-clip: border-box;
        border: 0 solid var(--ct-card-border-color);
        border-radius: 0.25rem;

    }

    .morris-donut-example svg text tspan {
        font-size: 10px !important;
    }

    .content {
        padding-top: 25px;
    }

    .random {
        display: none;
    }
    .content-page {
    padding: 0 12px 40px 12px;
}

.container {
            width: 80%;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 107px;
            margin-left: 270px;
        }
    
        h1 {
            color: red;
            font-size: 24px;
            margin-bottom: 20px;
        }
        .form-group {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        .form-group div {
            flex: 1;
            min-width: 200px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-group input, .form-group select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .form-group input[type="email"] {
            width: calc(100% - 22px);
        }
        .form-group input[type="text"] {
            width: calc(100% - 22px);
        }
        .form-group select {
            width: calc(100% - 22px);
        }
        .form-group input:focus, .form-group select:focus {
            border-color: #007bff;
        }
        .form-group .required {
            color: red;
        }
        .btn-save {
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 12px;
        }
        .btn-save:hover {
            background-color: #0056b3;
        }
        .table-container {
            margin-top: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        .action-buttons {
            display: flex;
            gap: 10px;
        }
        .action-buttons .btn-edit, .action-buttons .btn-delete {
            padding: 5px 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            color: #fff;
        }
        .btn-edit {
            background-color: #ffc107;
        }
        .btn-delete {
            background-color: #dc3545;
        }
        .pagination {
            text-align: right;
            margin-top: 10px;
        }
        .pagination span {
            margin-right: 10px;
        }

   
</style>
@endsection

@section('content')
<div class="container">
    <h1>Map Device</h1>
   
</div>
<div class="container table-container">
    <table>
        <thead>
            <tr>
                <th>Sr no</th>
                <th>Customer</th>
                <th>Location</th>
                <th>Mobile No.</th>
                <th>Email</th>
                <th>Device Type</th>
                <th>Device ID</th>
                <th>Created At</th>
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
                <td class="action-buttons">
                    <button class="btn-edit"><i class="fas fa-edit"></i></button>
                    <button class="btn-delete"><i class="fas fa-trash"></i></button>
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
                <td class="action-buttons">
                    <button class="btn-edit"><i class="fas fa-edit"></i></button>
                    <button class="btn-delete"><i class="fas fa-trash"></i></button>
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
                <td class="action-buttons">
                    <button class="btn-edit"><i class="fas fa-edit"></i></button>
                    <button class="btn-delete"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="pagination">
        <span>Showing 1 to 3 of 3 entries</span>
        <span><a href="#">1</a></span>
    </div>
</div>

@endsection



