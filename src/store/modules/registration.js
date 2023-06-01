export default {
    state: {
        isReg: false,
    },
    actions: {
        async onReg({commit}, [
            name,
            surname,
            patronymic,
            telephone,
            login,
            password
        ]) {
            try {
                const res = await fetch('http://192.168.13.0/public/api/reg', {
                    method: 'POTS',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        surname: surname,
                        patronymic: patronymic,
                        telephone: telephone,
                        login: login,
                        password: password,
                    })
                })

                const reg = await res.json()

                if (reg.data) {
                    commit('setIsReg', true)
                    console.log(reg.data)
                }

                console.log(reg);
            }
            catch (error) {
                console.log(error)
            }
        }
    },
    mutations: {
        setIsReg(state, isReg) {
            state.isReg = isReg
        }
    },
    getters: {
        getIsReg: state => state.isReg
    }
}
