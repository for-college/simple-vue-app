export default {
    state: {
        products: [] // переименовал product в products для соответствия множественному числу
    },
    actions: {
        async getProductsFromApi({ commit }, category = null) { // переименовал метод и параметр для удобочитаемости
            try {
                const url = `http://192.168.13.0/public/api/product${category ? '/category/' + category : ''}` // использование шаблонных строк для лучшей читаемости
                const res = await fetch(url, { method: 'GET' });
                const { data } = await res.json(); // деструктуризация для получения только data из ответа сервера
                commit('setProductToState', data);
            } catch (error) {
                console.error(error);
            }
        }
    },
    mutations: {
        setProductToState(state, products) {
            const baseUrl = 'http://192.168.13.0/storage/app/public/images/products/';
            products.forEach(product => {
                product.photo = product.photo ? baseUrl + product.photo : baseUrl + 'default.webp';
            });
            state.products = products;
        }
    },
    getters: {
        getProducts: state => state.products
    }
}