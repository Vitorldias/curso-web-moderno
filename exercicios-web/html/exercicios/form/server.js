const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/curso-web-moderno/exercicios-web/html/index.html', (req, resp) => {
  console.log(req.body)
  resp.send('<h1>Parabens</h1>')
})

app.listen(5500)