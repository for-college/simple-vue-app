export default {
    state: {
        token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
        role: null,
        user:{
            'id': '',
            'name': '',
            'surname': '',
            'patronymic': '',
            'telephone': '',
            'login': '',
            'group': '',
            'photo': '',
        }
    },
    actions: {
        async onLogin({commit}, [login, password]) {
            try {
                const res = await fetch('http://192.168.13.0/public/api/login', {
                    method: 'POST',
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
                    commit('setToken', auth.data.user_token)
                }
            }
            catch (err) {
                console.log(err)
            }
        },
        async getUserInfoFromApi({commit, state}){
            try {
                const res = await fetch(`http://192.168.13.0/public/api/info`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${state.token}`,
                    }
                })
                const { data } = await res.json()

                commit('setUser', data[0])
            }
            catch (error){
                console.log(error)
            }
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        setUser(state, user) {
            const base_url = 'http://192.168.13.0/storage/app/public/images/users/'
            state.user = {
                'id': user.id,
                'name': user.name,
                'surname': user.surname,
                'patronymic': user.patronymic,
                'telephone': user.telephone,
                'login': user.login,
                'group': user.group,
                'photo': `${base_url}${user.photo || 'default.png'}`,
            }
        }
    },
    getters: {
        getToken: state => state.token,
        getUser: state => state.user
    }
}