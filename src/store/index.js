import {createStore} from 'vuex';

import category from '@/store/modules/category';
import product from '@/store/modules/products';
import auth from '@/store/modules/auth';
import registration from '@/store/modules/registration';

const store = createStore({
    modules: {
        category,
        product,
        auth,
        registration,
    }
})

export default store;