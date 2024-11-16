<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">NUXT @16alves02</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Merch</NuxtLink></li>
          <li><NuxtLink to="/login" class="btn-login">Login</NuxtLink></li>
          <li><NuxtLink to="/register" class="btn-login">Register</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #d88c35;
  }
</style>