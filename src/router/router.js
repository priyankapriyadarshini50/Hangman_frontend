import { createRouter, createWebHashHistory} from 'vue-router'
import RegisterForm from '@/views/RegisterForm.vue'
import SigninForm from '@/views/SigninForm.vue'
import UserProfile from '@/views/UserProfile.vue'
import UserLogout from '@/views/UserLogout.vue'

export default createRouter({
    
    mode: "history",
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: RegisterForm},
        { path: '/login', component: SigninForm},
        {path: '/profile', component: UserProfile},
        {path: '/logout', component: UserLogout},
    ]
})