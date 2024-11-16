<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '~/components/ProductCard.vue';

  //  fetch the products
  const { data: products } = await useFetch('https://fakestoreapi.com/products')

  useHead({
    title: 'NUXT @16alves02 | Merch',
    meta: [
      { name: 'description', content: 'NUXT 3 Merch'}
    ]
  })

  definePageMeta({
    layout: "products",
  })
</script>