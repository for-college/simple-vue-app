<script>
import {defineComponent} from 'vue';
import {mapActions, mapGetters} from 'vuex';

import router from '@/router';

export default defineComponent({
    name: 'RegistrationView',
    data() {
        return {
            inputName: '',
            inputSurname: '',
            inputPatronymic: '',
            inputTelephone: '',
            inputLogin: '',
            inputPassword: '',
        }
    },
    computed: mapGetters(['getIsReg']),
    methods: {
        ...mapActions(['onReg']),
        async btnReg() {
            await this.onReg([
                this.inputName,
                this.inputSurname,
                this.inputPatronymic,
                this.inputTelephone,
                this.inputLogin,
                this.inputPassword
            ])
            if(this.getIsReg)
                await router.push('/auth')
        }
    }
})
</script>

<template>
    <div class="pop-container">
        <div class="pop_body">
            <p>Регистрация</p>
            <form @submit.prevent>
                <label>
                    <input v-model="inputName" type="text" placeholder="Имя">
                </label>
                <label>
                    <input v-model="inputSurname" type="text" placeholder="Фамилия">
                </label>
                <label>
                    <input v-model="inputPatronymic" type="text" placeholder="Отчество">
                </label>
                <label>
                    <input v-model="inputTelephone" type="text" placeholder="Телефон">
                </label>
                <label>
                    <input v-model="inputLogin" type="text" placeholder="Логин">
                </label>
                <label>
                    <input v-model="inputPassword" type="password" placeholder="Пароль">
                </label>
                <label>
                    <button @click="btnReg">Зарегестрироваться</button>
                </label>
                <p class="reg_p">Если у вас есть аккаунт можно войти <router-link to="/auth">тут</router-link></p>
            </form>
        </div>
    </div>
</template>

<style scoped>
.reg_p{
    margin: 10px auto;
    width: 330px;
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
.pop-container{
    display: flex;
    width: 100%;
    height: 100%;
}
.pop_body{
    margin: auto;
    width: 500px;
    background-color: white;
    border-radius: 15px;
    text-align: center;
    padding:  60px 15px 60px 15px;
    position: relative;
}
.pop_body p{
    font-size: 28px;
    font-weight: 500;
    color: black;
}
.pop_body input{
    display: block;
    margin: 0 auto 25px auto;
    width: 330px;
    padding: 17px 20px;
    border-radius: 15px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    color: #333;
    background-color: #e3e3e3;

}
.pop_body button{
    display: block;
    width: 330px;
    margin: 0 auto;
    padding: 20px 0;
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