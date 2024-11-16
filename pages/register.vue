<template>
    <div class="register-page flex justify-center items-center min-h-screen bg-gray-100">
      <div class="max-w-sm w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-6">Sign Up</h2>
        <form @submit.prevent="handleRegister">
          <!-- Username Input -->
          <div class="form-group mb-5">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input
              v-model="username"
              type="text"
              id="username"
              class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              required
            />
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200">
            Register
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  
  const handleRegister = async () => {
    try {
      const response = await $fetch('http://localhost:8000/register', {
        method: 'POST',
        body: { username: username.value, password: password.value },
      });
      if (response.success) {
        router.push('/login');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };
  </script>
  