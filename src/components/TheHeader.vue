<script>
import {defineComponent} from 'vue';
import {mapGetters} from 'vuex';

export default defineComponent({
    name: 'TheHeader',
    computed: mapGetters(['GET_TOKEN'])
})
</script>

<template>
  <header>
      <router-link to="/">
          <img class="logo" src="@/assets/logo.png" alt="logo">
      </router-link>
      <nav>
          <ul class="nav_links">
              <li>
                  <router-link to="/">Главная</router-link>
              </li>
              <li>
                  <router-link to="/cart">Корзина</router-link>
              </li>
          </ul>

          <ul class="nav_links" style="display: none">
              <li>
                  <router-link to="/all_products">Продукты</router-link>
              </li>
              <li>
                  <router-link to="/all_users">Пользователи</router-link>
              </li>
          </ul>
      </nav>

      <router-link v-if="!GET_TOKEN" to="/auth">
          <button class="btn_auth">Войти</button>
      </router-link>
  </header>
</template>

<style scoped>
 nav{
     display: flex;
 }
 header{
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 30px 5%;
     box-shadow: 1em 1px 15px #d4d4d4;
 }
 .logo{
     cursor: pointer;
     height: 30px;
 }
 li, a, button{
     font-size: 16px;
     color: black;
     text-decoration: none;
 }
 .nav_links{
     list-style-type: none;
 }
 .nav_links li{
     display: inline-block;
     padding: 0 20px;
 }
 .nav_links li a{
     transition: color .2s linear;
 }
 .nav_links li a:hover{
    color: rgb(0, 175, 175);
 }
 .btn_auth{
     transition: background-color .2s linear;
     color: white;
     padding: 9px 25px;
     background-color: rgb(0, 175, 175);
     border: 1px solid transparent;
     border-radius: 10px;
     cursor: pointer;
 }
 .btn_auth:hover{
     color: black;
     border: 1px solid rgb(0, 175, 175);
     background-color: transparent;
 }
</style>