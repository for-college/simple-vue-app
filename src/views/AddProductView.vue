<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'AddProductView'
})
</script>

<template>
    <div class="add_product">
        <h1>Добавление продукта</h1>
        <form @submit.prevent>
            <div class="add_product-form">
                <div class="add_product-input">
                    <div>
                        <label>
                            Имя
                            <input v-model="inputName" type="text" placeholder="Имя">
                        </label>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>

</style>