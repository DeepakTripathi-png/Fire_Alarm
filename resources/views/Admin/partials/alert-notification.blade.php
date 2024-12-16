<style>


.alert-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    align-items: center; 
    justify-content: center; 
    z-index: 9999;
}


.alert-box {
    border: 1px solid #dee2e6;
    border-radius: 5px;
    background-color: white;
    padding: 20px;
    width: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    margin-top: 300px;
    margin-left: 767px;
}


.alert-header {
    background-color: red;
    color: white;
    text-align: center;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.alert-title {
    font-size: 24px;
    margin: 0;
}


.alert-content {
    padding: 20px;
}

.alert-content p {
    margin: 0;
    font-size: 16px;
}

.alert-content span {
    color: #007bff;
}


.alert-footer {
    text-align: center;
    margin-top: 20px;
}

.alert-footer button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
}



/* .alert-box {
    border: 1px solid #dee2e6;
    border-radius: 5px;
    background-color: white;
    padding: 20px;
    width: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    margin-top: 300px;
    margin-left: 767px;
} */


</style>    



<!-- Popup modal backdrop -->
<div id="alertBackdrop" class="alert-backdrop">
    <div class="alert-box">
        <div class="alert-header">
            <p class="alert-title">Alert</p>
        </div>
        <div class="alert-content">
            <p>Device ID: <span id="deviceId"></span></p>
            <p>Device Type: <span id="deviceType"></span></p>
            <p>Location: <span id="location"></span></p>
            <p>Description: <span id="alertMessage"></span></p>
        </div>
        <div class="alert-footer">
            <button type="button" class="btn-ok">OK</button>
        </div>
    </div>
</div>

{{-- <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script> --}}

<script>
    function showAlert(notification) {
        // Show the backdrop and alert box
        $('#alertBackdrop').fadeIn();

        // Populate the alert box with dynamic content
        $('#deviceId').text(notification.device_id);
        $('#deviceType').text(notification.device_type);
        $('#location').text(notification.location);
        $('#alertMessage').text(notification.alert_message);

        // Close alert when clicking OK
        $('.btn-ok').on('click', function() {
            $('#alertBackdrop').fadeOut();
        });
    }

    function pollNotifications() {
        setInterval(() => {
            $.ajax({
                url: "{{ route('showAlert') }}", 
                method: 'GET',
                success: function(response) {
                    if (response.alert_notification.length > 0) {
                        response.alert_notification.forEach(notification => {
                            showAlert(notification);
                        });
                    }
                },
                error: function(error) {
                    console.error('Error fetching notifications:', error);
                }
            });
        }, 100); // Check for new notifications every minute
    }

    $(document).ready(function() {
        pollNotifications();
    });
</script>

