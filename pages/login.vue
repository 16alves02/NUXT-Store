<template>
    <div class="login-page flex justify-center items-center min-h-screen bg-gray-100">
      <div class="max-w-sm w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-6">Login</h2>
        <form @submit.prevent="handleLogin">
          <!-- Username Input -->
          <div class="form-group mb-5">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input
              v-model="username"
              type="text"
              id="username"
              class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              :class="{'border-red-500': errorMessage}"
              placeholder="Enter your username"
              required
            />
          </div>
  
          <!-- Password Input -->
          <div class="form-group mb-5">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              :class="{'border-red-500': errorMessage}"
              placeholder="Enter your password"
              required
            />
          </div>
  
          <!-- Error Message -->
          <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
            <p>{{ errorMessage }}</p>
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
          >
            Login
          </button>
        </form>
        
        <!-- Register Link -->
        <div class="text-center mt-4">
          <p class="text-sm text-gray-600">Don't have an account?</p>
          <NuxtLink to="/register" class="text-orange-600 hover:underline">Sign Up</NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  
  const handleLogin = async () => {
    try {
      const response = await $fetch('http://localhost:8000/login', {
        method: 'POST',
        body: { username: username.value, password: password.value },
      });
      if (response.token) {
        // Store the token in localStorage or Vuex
        localStorage.setItem('token', response.token);
        router.push('/dashboard');  // Redirect to the dashboard
      } else {
        errorMessage.value = 'Invalid credentials';
      }
    } catch (error) {
      errorMessage.value = 'An error occurred. Please try again.';
    }
  };
  </script>
  