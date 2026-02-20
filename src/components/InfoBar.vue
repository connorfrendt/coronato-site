<template>
    <div>
        <!-- MOBILE HEADER -->
        <div class="mobile-menu-wrapper">
            <div class="menu-title" @click="menuOpener">MENU</div>
            <div class="inner-menu-wrapper" v-show="isMenuOpen">
                <div class="row">
                    <div class="col">
                        <RouterLink class="info-bar-button" to="/">Home</RouterLink>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <RouterLink class="info-bar-button" to="/services">Services</RouterLink>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <RouterLink class="info-bar-button" to="/about-me">About Us</RouterLink>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <RouterLink class="info-bar-button" to="/reviews">Reviews</RouterLink>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <RouterLink class="info-bar-button" to="/TBD">Book an Appointment</RouterLink>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <RouterLink class="info-bar-button" to="/contact-us">Contact Us</RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <!-- DESKTOP HEADER -->
        <div class="container-fluid">
            <div class="row row-cols-2 row-cols-md-6 info-bar-wrapper">
                <div class="col">
                    <RouterLink class="info-bar-button" to="/">Home</RouterLink>
                </div>
                <div class="col">
                    <RouterLink class="info-bar-button" to="/services">Services</RouterLink>
                </div>
                <div class="col">
                    <RouterLink class="info-bar-button" to="/about-me">About Us</RouterLink>
                </div>
                <div class="col">
                    <RouterLink class="info-bar-button" to="/reviews">Reviews</RouterLink>
                </div>
                <div class="col">
                    <RouterLink class="info-bar-button" to="/book-an-appointment">Book an Appointment</RouterLink>
                </div>
                <div class="col">
                    <RouterLink class="info-bar-button" to="/contact-us">Contact Us</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function menuOpener() {
    console.log('Menu Open? ', isMenuOpen.value);
    isMenuOpen.value = !isMenuOpen.value;
    console.log('Menu Open? ', isMenuOpen.value);
}
</script>

<style>
    @import '../scss/info-bar.scss';
</style>