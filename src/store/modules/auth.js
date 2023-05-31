export default {
    state: {
        token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
        role: null,
        user:{
            'id': '',
            "name": '',
            "surname": '',
            "patronymic": '',
            "telephone": '',
            "login": '',
            "group": '',
            "photo": '',

        }
    },
    actions: {
        async onLogin({commit}, [login, password]) {
            try {
                const res = await fetch('http://192.168.13.0/public/api/login', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        login: login,
                        password: password,
                    })
                })
                const auth = await res.json()

                if (auth.data) {
                    commit('SET_TOKEN', auth.data.user_token)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        }
    },
    getters: {
        GET_TOKEN: state => state.token
    }
}