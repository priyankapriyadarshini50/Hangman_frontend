<template>
    <main class="form-signin w-100 m-auto"> 
        <form @submit.prevent="userLoginSubmit"> 
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1> 
            <div class="form-floating"> 
                <input type="email" class="form-control" v-model="email" id="floatingInput" placeholder="name@example.com"> 
                <label for="floatingInput">Email address</label> </div> <div class="form-floating">

                <input type="password" class="form-control" v-model="password" id="floatingPassword" placeholder="Password"> 
                <label for="floatingPassword">Password</label> </div> <div class="form-check text-start my-3">
            </div> 
            <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button> 
        </form> 
    </main>
</template>

<script>
import api from '@/config/axios';
export default {
  
  name: "SigninForm",
  data(){
    return{
      email: '',
      password: '',
    }
  },
  methods: {
    async userLoginSubmit(){
      try{
        const res = await api.post('users/login/', {
        email : this.email,
        password : this.password,
      });
      console.log(res);
      const userData = res.data.user;
      this.$store.commit('setUser', userData);

      // Navigate to userProfile or home page
      this.$router.push('/profile/')
      }catch(err){
        console.log("Error Login:", err.response?.data || err.message);
      }

    }
  },
}
</script>

<style>
html,
body {
  height: 100%;
}

.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}
</style>