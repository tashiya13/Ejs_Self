const express = require('express')
const app = express()
const port = 3000
app.set('view options', {delimiter: '?'});

app.get('/', (req, res) => {
  let siteName = 'adidas'
  let searchText = 'Search Now'
  res.sendFile("app/app.html",{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})