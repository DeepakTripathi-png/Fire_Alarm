
<style>
    .navbar-toggler {
    padding: 0.20rem 0.20rem;
    font-size: 1.10rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
   }

    .navbar-nav a.active {
        color: red; /* Change to your preferred highlight color */
        /* Add any other styling you want for the active link */
    }


    .active {
        color: red;
    }

</style>



<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
            <img src="{{ asset('front/images/ioglobe_front_logo.png') }}" alt="FireAlarm Logo" style="max-height: 30px; margin-right: 10px;">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#home" style="font-weight: bold;">Features </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about-us" style="font-weight: bold;">Services</a>       
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#services" style="font-weight: bold;">Testimonials</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#team" style="font-weight: bold;">Contact</a>
                </li>
                
            </ul>
        </div>
    </div>
</nav>



