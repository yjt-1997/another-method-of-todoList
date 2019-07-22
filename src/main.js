import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        items: [],
    },
    getters: {
        getAllItems: state => {
            return state.items;
        },
        getActiveItems: state => {
            return state.items.filter(item => !item.isCompleted);
        },
        getCompletedItems: state => {
            return state.items.filter(item => item.isCompleted);
        }
    },
    mutations: {
        addItem(state, item) {
            item.id = state.items.length + 1;
            state.items.push(item);
        },
        update(state, id) {
            let item = state.items.filter(item => item.id == id);
            item.isCompleted = !item.isCompleted;
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')