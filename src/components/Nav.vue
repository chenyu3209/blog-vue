<template>
    <nav class="navbar">
        <div :class="['container', { 'is-active': isMenuActive }]">
            <div class="navbar-brand">
                <a href="#" class="navbar-title">Chen Yu's Blog</a>
                <button :class="['navbar-burger', { 'is-activte': isMenuActive }]" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div :class="['navbar-menu', { 'is-active': isMenuActive }]">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuActive = ref(false)

function toggleMenu() {
    isMenuActive.value = !isMenuActive.value
}
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;

    display: flex;
    align-items: center;

    z-index: 1000;
}

.container {
    width: 100%;

    display: flex;
}

.navbar-brand {
    height: 60px;
    width: 100%;
    padding: 10px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #3C3434;
}

.navbar-title {
    font-size: 1.5em;
    color: #fff;
    text-decoration: none;
}

.navbar-burger {
    display: none;

    cursor: pointer;
    background: none;
    border: none;
}

.navbar-burger span {
    height: 3px;
    width: 25px;
    margin: 4px;

    display: block;
    background-color: #fff;
}

.navbar-menu {
    padding: 10px 20px;

    display: flex;
    align-items: center;
    background-color: #3C3434;
}

.navbar-menu.is-active {
    width: 100%;

    display: flex;
}

.navbar-nav {
    display: flex;

    list-style: none;
}

.nav-item {
    margin: 0 20px;
    text-align: center;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    font-size: 1em;
}

.nav-link:hover {
    text-decoration: underline;
}

@media (max-width: 980px) {
    .container {
        height: 60px;

        display: inline-block;
        overflow: hidden;
        transition: height 300ms;
    }

    .container.is-active {
        height: 160px;
    }

    .navbar-burger {
        display: block;
    }

    .navbar-menu {
        background-color: #5A4D4D;
    }

    .navbar-nav {
        width: 100%;

        flex-direction: column;
    }

    .nav-item {
        height: 20px;
        margin: 10px 0;
    }
}
</style>
