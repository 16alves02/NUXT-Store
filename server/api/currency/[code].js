export default defineEventHandler(async (event) => {
  
  const { code } = event.context.params

  const { currencyKey } = useRuntimeConfig()
  console.log('Currency API Key in API Handler:', currencyKey)

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`
  console.log('Fetching from URI:', uri)

  const { data } = await $fetch(uri)
  
  return data
})
