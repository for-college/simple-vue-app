import {createStore} from 'vuex';

import category from '@/store/modules/category';
import product from '@/store/modules/products';
import auth from '@/store/modules/auth';

const store = createStore({
    modules: {
        category,
        product,
        auth,
    }
})

export default store;