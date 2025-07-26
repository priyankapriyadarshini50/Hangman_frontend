<template>
    <div v-if="user">
    <h1>Welcome, {{ user?.name || 'User' }}</h1>
    <p>Email: {{ user?.email }}</p>
  </div>
  <div v-else>
    <h3>User has successfully logged out</h3>
    </div>
</template>

<script>

export default {
  
    name: "UserLogout",
    methods: {
        logout() {
            this.$store.commit('setUser', null);
            this.$router.push('/login');
        },
    },
    computed: {
            user() {
                return this.$store.getters.getUser;
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