<template>
    <div class="calendly-wrapper">
        <div
            class="calendly-inline-widget"
            :data-url="calendlyUrl"
            style="min-width:320px;height:700px;"
        ></div>
    </div>
</template>

<script setup>
    defineProps({
        calendlyUrl: {
            type: String,
            required: true
        }
    });
</script>

<style scoped></style>