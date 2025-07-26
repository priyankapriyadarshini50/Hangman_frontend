// Vuex store is used to provide a centralized state management for the Vue application.
import { createStore } from 'vuex';


export default createStore({
    state: {
        user: null, // Holds the user data after login
    },
    mutations: {
        setUser(state, user) {
            state.user = user; // Sets the user data
        }
    },
    getters: {
        isAuthenticated: state => !!state.user,
        getUser: state => state.user
    },
})