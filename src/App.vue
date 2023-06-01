<template>
    <TheHeader />
    <section class="page">
        <router-view />
    </section>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import {mapActions} from "vuex";
export default {
    name: 'App',
    components: {
        TheHeader
    },
    methods: mapActions(['getUserInfoFromApi']),
    async mounted() {
        await this.getUserInfoFromApi()
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
        padding: 20px
    }
</style>
