const express = require('express')
const request = require('request-promise')

const app = express()
const PORT = process.env.PORT || 3000
const apiKey = 'c3aa55e23c2e2a0d775d8e3c0f262b21'
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json());

app.get('/', function(req, res){
  res.send('Welcome to my Amazon Web Scraper API')
})

// GET Product Details
// test URL: http://localhost:3000/products/B09JQWSQK7
app.get('/products/:productId', async (req,res) => {
  const { productId } = req.params

  try {
    const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`)
    res.json(JSON.parse(response))
  } catch(error) {
    res.json(error)
  }
})

// GET Product Reviews
app.get('/products/:productId/reviews', async (req,res) => {
  const { productId } = req.params

  try {
    const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`)
    res.json(JSON.parse(response))
  } catch(error) {
    res.json(error)
  }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));