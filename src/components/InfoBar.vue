<template>
    <div>
        <div class="mobile-menu">MENU</div>
        <div class="container-fluid">
            <div class="row row-cols-2 row-cols-md-5 info-bar-wrapper">
                <div class="col">
                    <RouterLink class="info-bar-button" to="/">Home</RouterLink>
                </div>
                <div class="col">
                    <RouterLink class="info-bar-button" to="/about-me">About Us</RouterLink>
                </div>
                <div class="col">
                    <RouterLink class="info-bar-button" to="/TBD">Book an Appointment</RouterLink>
                </div>
                <div class="col">
                    <RouterLink class="info-bar-button" to="/contact-us">Contact Us</RouterLink>
                </div>
                <div class="col">
                    <RouterLink class="info-bar-button" to="/reviews">Reviews</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style>
    @import '../scss/info-bar.scss';
</style>