@section('meta_title') Import Device | Fire alram @endsection
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

    /* .container {
        max-width: 1612px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-top: 105px;
        margin-left: 271px;
    } */

    .container {
            width: 80%;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 105px;
            margin-left: 271px;
        }
        h1 {
            color: red;
            font-size: 24px;
        }
        .upload-section {
            margin-bottom: 20px;
        }
        .upload-section input[type="file"] {
            display: none;
        }
        .upload-section label {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
        }
        .upload-section .file-name {
            margin-left: 10px;
        }
        .upload-section a {
            display: block;
            margin-top: 10px;
            color: #007bff;
            text-decoration: none;
        }
        .upload-section a:hover {
            text-decoration: underline;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
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
        .status-online {
            color: green;
        }
        .status-offline {
            color: red;
        }
        .status-idle {
            color: orange;
        }
        .action-buttons i {
            cursor: pointer;
            margin-right: 10px;
        }
        .action-buttons .edit {
            color: #ffc107;
        }
        .action-buttons .delete {
            color: #dc3545;
        }
        .pagination {
            text-align: right;
            margin-top: 10px;
        }
        .pagination span {
            display: inline-block;
            padding: 5px 10px;
            background-color: #dc3545;
            color: #fff;
            border-radius: 5px;
        }
</style>
@endsection

@section('content')

<div class="container">
    <h1>Import Device</h1>
    <div class="upload-section">
        <label for="file-upload">Choose File</label>
        <input type="file" id="file-upload">
        <span class="file-name">No file Chosen</span>
        <a href="#">Download Template</a>
    </div>
    <table>
        <thead>
            <tr>
                <th>Sr no</th>
                <th>Device ID</th>
                <th>Device Status</th>
                <th>Device Type</th>
                <th>Sim No.</th>
                <th>IMEI No.</th>
                <th>Created At</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td><a href="#">TOR2314233</a></td>
                <td class="status-online">Online</td>
                <td>Smoke Detector</td>
                <td>+91-8857945412</td>
                <td>88579454125881321</td>
                <td>12/11/2024 16:14:45</td>
                <td class="action-buttons">
                    <i class="fas fa-edit edit"></i>
                    <i class="fas fa-trash delete"></i>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td><a href="#">TOR2314234</a></td>
                <td class="status-offline">Offline</td>
                <td>Smoke Detector</td>
                <td>+91-8857945412</td>
                <td>88579454128415313</td>
                <td>12/11/2024 16:14:45</td>
                <td class="action-buttons">
                    <i class="fas fa-edit edit"></i>
                    <i class="fas fa-trash delete"></i>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td><a href="#">TOR2314235</a></td>
                <td class="status-idle">Idle</td>
                <td>Smoke Detector</td>
                <td>+91-8857945412</td>
                <td>88579454126511355</td>
                <td>12/11/2024 16:14:45</td>
                <td class="action-buttons">
                    <i class="fas fa-edit edit"></i>
                    <i class="fas fa-trash delete"></i>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="pagination">
        <span>1</span>
    </div>
</div>

@endsection

@section('script')
<script>
    document.getElementById('file-upload').addEventListener('change', function() {
        var fileName = this.files[0].name;
        document.querySelector('.file-name').textContent = fileName;
    });
</script>
@endsection

