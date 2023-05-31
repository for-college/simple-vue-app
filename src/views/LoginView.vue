<script>
import {defineComponent} from 'vue'

import router from '@/router';

import {mapActions, mapGetters} from 'vuex';

export default defineComponent({
    data(){
        return{
            inputLogin: '',
            inputPassword: ''
        }

    },
    computed: mapGetters(["getToken"]),
    methods: {
        ...mapActions(["onLogin"]),
        async btnAuth() {
            await this.onLogin([this.inputLogin, this.inputPassword])
            if (this.getToken){
                await router.push('/')
            }
        }
    }
})
</script>

<template>
    <div class="pop-container">
        <div class="pop_body">
            <p>Вход</p>
            <form @submit.prevent>
                <label>
                    <input v-model="inputLogin" type="text" placeholder="Логин">
                </label>
                <label>
                    <input v-model="inputPassword" type="password" placeholder="Пароль">
                </label>
                <label>
                    <button @click="btnAuth">Войти</button>
                </label>
                <p class="reg_p">
                    Если у вас нет аккаунта, то можно создать
                    <router-link to="/reg">тут</router-link>
                </p>
            </form>
        </div>
    </div>
</template>

<style scoped>
.pop-container{
    height: 100%;
    margin: auto;
}
.reg_p{
    font-size: 18px;
    margin: 10px auto;
    color: rgba(0 ,0, 0, .4);
}
.reg_p a{
    font-weight: 700;
    color: rgba(0 ,0, 0, .4);
    text-decoration: none;
}
.reg_p a:hover{
    color: rgba(0 ,135, 170, 1);
}
.pop_body{
    background-color: white;
    border-radius: 15px;
    text-align: center;
}
.pop_body p{
    font-size: 18px;
    font-weight: 500;
    color: black;
}
.pop_body input{
    display: block;
    margin: 0 auto 25px auto;
    padding: 17px 20px;
    border-radius: 15px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    color: #333;
    background-color: #e3e3e3;
}
.pop_body button{
    margin: 0 auto;
    padding: 20px 40px;
    font-weight: 500;
    font-size: 16px;
    border: none;
    color: white;
    border-radius: 15px;
    background-color: rgba(0, 135, 170, 1);
}
.pop_body label{
    color: red;
    text-align: left;
}
</style>