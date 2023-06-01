<script>
import {defineComponent} from 'vue';
import{mapGetters} from 'vuex';
export default defineComponent({
    name: 'ProfileView',
    computed: mapGetters(['getUser']),
})
</script>

<template>
    <div class="profile">
        <div class="profile_left">
            <div class="profile_top">
                <img src="@/assets/logo.png" alt="avatar">
                <div class="profile_body">
                    <span>{{getUser.name}} {{getUser.surname}}</span>
                    <span class="profile_body_login">Логин: {{getUser.login}}</span>
                </div>
            </div>
            <div class="profile_bottom">
                <div class="profile_menu">
                    <ul>
                        <li class="to-left">Профиль</li>
                        <li class="to-left">Мои заказы</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="profile_groups2">
            <h4>Ваша информация</h4>
            <ul class="profile_personal-info">
                <li>
                    <h6>ФИО</h6>
                    <p>{{getUser.name}} {{getUser.surname}} {{getUser.patronymic}}</p>
                </li>
                <li>
                    <h6>Логин</h6>
                    <p>{{getUser.login}}</p>
                </li>
                <li>
                    <h6>Телефон</h6>
                    <p>{{getUser.telephone}}</p>
                </li>
            </ul>
            <div class="profiles_btn">
                <router-link to="/update_user" class="btn">Изменить профиль</router-link>
                <button class="btn">Выход</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile {
    display: flex;
    justify-content: center;
    gap: 80px;
    flex-wrap: wrap;
}
.profile_top {
    border-bottom: 1px solid black;
    margin: 10px auto;
}

.profile_top img {
    margin: 0 10px 10px 10px;
    border: 1px solid gray;
    border-radius: 10px;
    width: 70px;
    height: 70px;
}

.profile_body {
    padding: 10px;
    justify-content: center;
    font-size: 20px;
    display: flex;
    flex-direction: column;
}

.profile_body_login {
    color: rgba(3, 3, 3, .4);
}

.profile_menu ul {
    list-style-type: none;
}
.to-left {
    padding: 10px 0;
    transition: color .3s ease;
}
.to-left:hover{
    cursor: pointer;
    color: rgba(0, 135, 170, 1);
}
.profile_groups2 h4 {
    font-size: 30px;
    margin-bottom: 10px;
}
.profiles_btn {
    display: flex;
    gap: 40px;
}
.profile_personal-info{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    list-style-type: none;
}
.profile_personal-info h6{
    font-size: 20px;
    margin-bottom: 10px;
}
.btn {
    padding: 15px 10px;
    display: inline-block;
    margin: 0 auto;
    font-weight: 500;
    font-size: 16px;
    color: white;
    border-radius: 15px;
    background-color: blueviolet;
    cursor: pointer;
    border: 2px solid transparent;
}
.btn:hover{
    background-color: transparent;
    color: blueviolet;
    border: 2px solid blueviolet;
    transition: all .15s linear;
}
.profiles_btn a {
    text-decoration: none;
}
</style>