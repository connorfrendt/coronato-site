<template>
    <div>
        <div class="appt">
            Book An Appointment!
            <Calendly calendlyUrl="https://calendly.com/connorfrendt/30min" />
        </div>
    </div>
</template>

<script setup>
    import Calendly from './Calendly.vue';
</script>

<style>
    @import '../scss/book-appt.scss';
</style>