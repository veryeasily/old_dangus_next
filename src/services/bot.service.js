const got = require("got")

/**
 * @type {import("got").Got}
 */
const client = got.extend({
  prefixUrl: "https://api.groupme.com/v3",
})

module.exports = class BotService {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  constructor(req, res) {
    this.req = req
    this.res = res
  }

  async processGroupMe() {
    this.res.sendStatus(200)

    if (this.req.body.sender_type === "bot") return

    const botId = process.env.GROUPME_BOT_ID
    const message = "hello world!"
    try {
      await client.post("bots/post", {
        json: {
          text: message,
          bot_id: botId,
        },
      })
    } catch (err) {
      console.error(err)
    }
  }
}
