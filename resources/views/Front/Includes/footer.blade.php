{{-- <style>
     body {
            background-color: #FFE4E1;
            font-family: Arial, sans-serif;
        }
        .logo {
            font-size: 2rem;
            font-weight: bold;
        }
        .logo .dot {
            color: orange;
        }
        .logo .globe {
            color: orange;
        }
        .contact-info {
            text-align: right;
        }
        .contact-info i {
            color: orange;
            margin-right: 10px;
        }
        @media (max-width: 576px) {
            .contact-info {
                text-align: left;
                margin-top: 20px;
            }
        }
</style>
<div class="container">
    <div class="row">
     <div class="col-sm-6">
      <div class="logo">
       <span class="dot">
        i
       </span>
       o
       <span class="globe">
        <i class="fas fa-globe">
        </i>
       </span>
       Globe
      </div>
      <p>
       At ioGlobe, great service starts with experienced professionals. Our skilled team ensures every project is completed on time, with top-notch quality. With personalized service, competitive rates, and a commitment to customer satisfaction, we consistently exceed expectations.
      </p>
     </div>
     <div class="col-sm-6 contact-info">
      <p>
       <i class="fas fa-phone-alt">
       </i>
       +91-7757945810
      </p>
      <p>
       <i class="fas fa-envelope">
       </i>
       info@firealarm.com
      </p>
      <p>
       <i class="fas fa-map-marker-alt">
       </i>
       145 Fire alarm, mumbai-454567
      </p>
     </div>
    </div>
   </div> --}}

<style>
    /* General styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    /* background-color: #ffece5; */
}

/* Container */
.info-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    /* max-width: 1200px; */
    margin: 50px auto;
    background-color: #ffede6;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}

/* Left Text Section */
.info-text {
    width: 60%;
}

.info-text h1 {
    font-size: 48px;
    color: #ff5722;
    margin-bottom: 20px;
}

.info-text p {
    font-size: 18px;
    line-height: 1.6;
    color: #333;
}

/* Right Contact Section */
.info-contact {
    width: 35%;
    text-align: right;
}

.info-contact p {
    font-size: 18px;
    line-height: 2;
    color: #333;
}

.info-contact .icon {
    color: #ff5722;
    margin-right: 10px;
}

/* Background globe */
.info-container::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: rgba(255, 87, 34, 0.1);
    background-image: url('globe-icon.png'); /* Replace with your globe image */
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    transform: translate(50%, -50%);
    opacity: 0.5;
}

/* Responsive Design */
@media (max-width: 768px) {
    .info-container {
        flex-direction: column;
        text-align: center;
        padding: 20px;
    }

    .info-text, .info-contact {
        width: 100%;
    }

    .info-contact {
        text-align: center;
    }

    .info-container::after {
        width: 200px;
        height: 200px;
        transform: translate(50%, -20%);
    }
}

</style>

   <div class="info-container">
    <div class="info-text">
        <img src="{{ asset('front/images/ioglobe_front_logo.png') }}" alt="FireAlarm Logo" style="max-height: 80px; max-width:170px; margin-right: 10px;">
        <p>At IoGlobe, great service starts with experienced professionals. Our skilled team ensures every project is completed on time, with top-notch quality. With personalized service, competitive rates, and a commitment to customer satisfaction, we consistently exceed expectations.</p>
    </div>
    <div class="info-contact">
        <p><span class="icon">&#9742;</span> +91-7757945810</p>
        <p><span class="icon">&#9993;</span> info@firealarm.com</p>
        <p><span class="icon">&#127968;</span> 145 Fire alarm, Mumbai-454567</p>
    </div>
</div>
