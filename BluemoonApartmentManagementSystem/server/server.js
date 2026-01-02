const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Testing Bluemoon Apartment Management System Server')
})

app.get('/testing', (req, res) => {
  res.send('This is just for testing purposes')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
