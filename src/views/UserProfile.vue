<template>
    <div v-if="user">
        <h1>Welcome, {{ user?.username || 'User' }}</h1>
        <p>Email: {{ user?.email }}</p>
        <p>Profile ID: {{ user?.id }}</p>
        <p>First Name: {{ user?.first_name }}</p>
        <p>Last Name: {{ user?.last_name }}</p>
    </div>
    <div v-else>
        <h1>Please log in to view your profile</h1>
    </div>
</template>

<script>
import api from '@/config/axios';
export default {
  
  name: "UserProfile",
  computed: {
        user() {
            return this.$store.getters.getUser; //
        }
    },
    methods: {
        logout() {
            this.$store.commit('setUser', null);
            this.$router.push('/login');
        },
        async fetchUserProfile() {
            try {
                const res = await api.get(`users/${this.user.id}/`, {});
                console.log("User Profile Data:", res.data);
                this.$store.commit('setUser', res.data);
            } catch (err) {
                console.error("Error fetching user profile:", err.response?.data || err.message);
            }
        }
    },
    mounted() {
        if (this.user) {
            this.fetchUserProfile(); // Fetch user profile when the page is loaded
        }
    }
 
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