const express = require('express')
const request = require('request-promise')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());

app.get('/', function(req, res){
  res.send('Welcome to my Amazon Web Scraper API')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));