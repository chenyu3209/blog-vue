<template>
    <div class="background-image">
        <slot></slot>
    </div>
</template>

<script setup>
</script>

<style scoped>
.background-image {
    background: url('@/assets/background.jpg') no-repeat fixed center 0;
    background-size: cover;
}
</style>
