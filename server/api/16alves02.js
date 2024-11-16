export default defineEventHandler(async (event) => {

  const { currencyKey } = useRuntimeConfig()
  console.log('Currency API Key in API Handler:', currencyKey)


  const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)

  return data
})