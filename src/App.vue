<template>
    <TheHeader />
    <section class="page">
        <router-view />
    </section>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
export default {
    name: 'App',
    components: {
        TheHeader
    }
}
</script>

<style>
    #app {
        font-family: Arial, sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .page{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 10px;
    }
</style>
