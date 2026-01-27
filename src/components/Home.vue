<template>
    <div class="image-wrapper">
        <img src="../assets/coronato-logo.png" class="logo-image" />

        <div class="quote">"Organization is the bridge between goals and results"</div>

        <div>
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
            >

                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item">
                        <img class="" src="../assets/PH-closet.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item active">
                        <img class="" src="../assets/PH-closet-2.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="" src="../assets/PH-closet.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style>
    @import '../scss/home.scss';
</style>