<template>
    <Background>
        <Nav />
        <RouterView />
        <Footer />
    </Background>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import Background from '@/components/Background.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue';
</script>
