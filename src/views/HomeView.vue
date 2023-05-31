<script>
import {defineComponent} from 'vue';
import {mapActions, mapGetters} from 'vuex';

export default defineComponent({
    computed: mapGetters(['getCategory','getProducts']),
    methods: {
        ...mapActions(['getCategoryFromApi','getProductsFromApi']),

        async btnCategory(id){
            await this.getProductsFromApi(id)
        }
    },
    async mounted() {
        await this.getCategoryFromApi()
        await this.getProductsFromApi()
    }
})
</script>

<template>
    <section class="page">
        <div class="title">
            <h1>Каталог</h1>
        </div>
        <div class="body">
            <div class="category">
                <div class="category_body">
                    <h1>Категории</h1>
                    <ul>
                        <li @click="btnCategory()">Все</li>
                        <li @click="btnCategory(category.id)" v-for="category in getCategory" :key="category.id">{{category.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="product">
                <div class="cards">
                    <div class="card" v-for="product in getProducts" :key="product.id">
                        <img :src="product.photo" alt="product">
                        <div class="card_body">
                            <p>{{product.name}}</p>
                            <p>{{product.price}} Р.</p>
                            <p>{{product.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.card{
    max-width: 250px;
    border:  1px solid #ccc;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
}
.cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}
.card img{
    width: 220px;
    height: auto;
    margin: 10px 0;
}
.card_body p{
    text-align: center;
    margin: 5px 0;
}
.page{
    display: flex;
    flex-direction: column;
}
.title{
    margin: 10px auto;
    font-size: 32px;
}
.body{
    display: flex;
    gap: 50px;
}
.category_body{
    padding: 25px;
    border: 1px solid #ccc;
    border-radius: 10px;
}
.category_body ul{
    list-style: none;
    margin: 10px 20px;
}
.category_body ul li {
    margin: 5px 0;
    transition: color .3s ease;
}

.category_body li:hover {
    color: rgba(0, 175, 170, 1);
    cursor: pointer;
}
</style>