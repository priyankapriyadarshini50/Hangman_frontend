<template>
    <main class="form-signin w-100 m-auto"> 
        <form @submit.prevent="userSubmit"> 
            <h1 class="h3 mb-3 fw-normal">Please Sign Up here</h1> 
            <div class="form-floating">
                <input type="username" class="form-control" v-model="username" placeholder=""> 
                <label for="floatingInput">Username</label> </div> <div class="form-floating">

                <input type="email" class="form-control" id="floatingInput" v-model="email" placeholder="name@example.com"> 
                <label for="floatingInput">Email address</label> </div> <div class="form-floating">

                <input type="password" class="form-control" id="floatingPassword" v-model="password" placeholder="Password"> 
                <label for="floatingPassword">Password</label> </div> <div class="form-check text-start my-3">
            </div> 
            <button class="btn btn-primary w-100 py-2" type="submit">Submit</button> 
        </form> 
    </main>
</template>

<script>
import axios from 'axios';
export default {
  name: "RegisterForm",
  data(){
    return{
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async userSubmit(){
      try{
        const resp = await axios.post('api/users/register/', {
          username : this.username,
          email : this.email,
          password : this.password,
        });
        console.log(resp.data);
        if(resp.status == 200){
          this.$router.push('/login')
        }
      }catch(err){
        console.log("Error registration:", err.response?.data || err.message);
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