$(function () {
    var table = $('#cims_data_table').DataTable({
        processing: true,
        serverSide: true,
        
        ajax: base_url + "/admin/master/device-master/data-table",
        columns: [{
            data: 'DT_RowIndex',
            name: 'DT_RowIndex'
        },
        {
            data: 'device_type',
            name: 'device_type'
        },
      
        {
            data: 'status',
            name: 'status',
            orderable: false,
            searchable: false
        },
        {
            data: 'action',
            name: 'action',
            orderable: false,
            searchable: false
        },
        ]
    });

    function reload_table() {
        table.DataTable().ajax.reload(null, false);
    }
})