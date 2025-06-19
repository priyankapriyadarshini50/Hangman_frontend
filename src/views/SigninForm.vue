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
import axios from 'axios';
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
        const res = await axios.post('api/users/login/', {
        email : this.email,
        password : this.password,
      });
      console.log(res);
      //this.$router.push('api/users/login/')
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

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>