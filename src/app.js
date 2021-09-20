require("./config");
const http = require("http");
const express = require("express");

const app = express();
const httpServer = http.createServer(app);

httpServer.listen(3000, () => {
  console.log(`Server started on port ${3000}`);
});