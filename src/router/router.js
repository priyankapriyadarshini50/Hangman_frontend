import { createRouter, createWebHashHistory} from 'vue-router'
import RegisterForm from '@/views/RegisterForm.vue'
import SigninForm from '@/views/SigninForm.vue'

export default createRouter({
    
    mode: "history",
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: RegisterForm},
        {path: '/login', component: SigninForm},
    ]
})