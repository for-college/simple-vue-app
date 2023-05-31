export default {
    // данные
    state: {
        category: [],
    },

    // изменения
    actions: {
        async getCategoryFromApi({ commit }) {
            try {
                const res = await fetch('http://192.168.13.0/public/api/category', {
                    method: 'GET',
                })

                const category = await res.json();

                commit('setCategoryToState', category.data)
            }
            catch (e){
                console.error(e)
            }
        }
    },

    // методы
    mutations: {
        setCategoryToState(state, category) {
            state.category = category;
        }
    },

    // обновление
    getters: {
        getCategory: state => state.category
    }
}