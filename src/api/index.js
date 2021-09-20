const express = require("express")

const BotService = require("@/services/bot.service")

module.exports = () => {
  const router = express.Router()

  router.get("/api/hello", (req, res) => {
    res.send("Hello World!")
  })

  router.post("/api/groupme", async (req, res) => {
    const service = new BotService(req, res)
    await service.processGroupMe(req, res)
  })

  return router
}
