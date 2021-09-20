require("./config")

const http = require("http")
const express = require("express")

const api = require("@/api")

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(`${__dirname}/../public`))

app.use(api())

const httpServer = http.createServer(app)

httpServer.listen(3000, () => {
  console.log(`Server started on port ${3000}`)
})
