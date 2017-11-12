const express = require("express");
const app = express();
const weatherRouter = require("./app/router");

app.use("/", weatherRouter.router);

app.listen(3000);