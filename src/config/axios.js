import axios from "axios"

// axios.defaults.baseURL = 'http://localhost:8000/';

// import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  withCredentials: true, // crucial for sending HTTP-only cookies
});

// Flag to avoid infinite refresh loops
// let isRefreshing = false;
// let failedQueue = [];

// const processQueue = (error, token = null) => {
//   failedQueue.forEach(prom => {
//     if (error) {
//       prom.reject(error);
//     } else {
//       prom.resolve(token);
//     }
//   });

//   failedQueue = [];
//   console.log(failedQueue)
// };

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    console.log("Error in Axios Interceptor:", error.response?.status, originalRequest);
    // If 401 and retry not yet attempted
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await api.post('users/refresh-token/'); // your refresh endpoint

        console.log("New Access Token:", res.data);

        return api(originalRequest);
      } catch (refreshErr) {
        console.error('Refresh token expired or invalid');
        await api.post('users/logout/').catch(() => {
            alert('Logout failed');
        });
       this.$router.push('/logout/');
      }
    }

    return Promise.reject(error);
  }
);

export default api;
