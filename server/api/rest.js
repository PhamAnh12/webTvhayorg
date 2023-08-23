
const app = require('express')()
const data =['1','2','3','4' ]
app.get('/', (req, res) => {
  res.send(data)
})

module.exports = app
