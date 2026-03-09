<template>
    <div class="calendly-wrapper">
        <div
            class="calendly-inline-widget"
            ref="calendlyContainer"
            style="min-width:320px;height:700px;"
        ></div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const props = defineProps({
        url: {
            type: String,
            required: true
        }
    });

    const calendlyContainer = ref(null);

    onMounted(() => {
        if(window.Calendly && calendlyContainer.value) {
            window.Calendly.initInlineWidget({
                url: props.url,
                parentElement: calendlyContainer.value
            });
        }
    });
</script>

<style scoped></style>