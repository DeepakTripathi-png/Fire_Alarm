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
            data: 'device_name',
            name: 'device_name'
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




$(function () {
    var table = $('#cims_data_table_1').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: base_url + "/admin/master/device-master/view_data-table",
            // data: function (d) {
            //     d.master_device_name = $('#master_device_name').val();
            //     d.master_device_id = $('#master_device_id').val();
            //     d.slave_device_name = $('#slave_device_name').val();
            // }
        },
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
          
            { data: 'io_slave_name', name: 'io_slave_name' },
            { data: 'slave_device_image', name: 'slave_device_image' },
            { data: 'slave_device_name', name: 'slave_device_name' },
            { data: 'io_device_status', name: 'io_device_status' },
           
        ]
    });

    // Reload table when any filter changes
    $('#master_device_name, #master_device_id, #slave_device_name').on('change', function () {
        table.ajax.reload(null, false);
    });
});