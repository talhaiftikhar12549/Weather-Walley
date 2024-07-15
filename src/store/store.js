import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            count: 0,
            lat:33.6995,
            long:73.0363,
            //dubai walli
            // long:25.2048,
            // lat:55.2708
            city:"Islamabad"
        }
    },
    mutations: {
        increment (state,payload) {

            state.long =payload.n,
            state.lat =payload.t
        },
        cityChanger(state , payload)
        {
         state.city  = payload
        }
    }
})

export default store
