<template>
  <div>
    <Head>
      <Title>NUXT @16alves02 | {{ product.title }}</Title>
      <meta name="description" :content="product.description">
    </Head>

    <ProductDetails :product="product"></ProductDetails>
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  const uri = 'https://fakestoreapi.com/products/' + id

  //  fetch the products
  const { data: product } = await useFetch(uri, { key: id })

  if (!product.value){
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true})
  }

  definePageMeta({
    layout: "products"
  })
</script>