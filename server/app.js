const express = require("express");
const { resolve } = require("node:path");
const { apiRouter } = require("./src/routes/apiRoutes.js");

var app = express();

require("./src/configs/configuration.js")(app);

app.use("/app", express.static(resolve("dist")));

app.get("/api", (req, res) =>
  res.json({
    message: "API request received at " + new Date().toLocaleString(),
  })
);
app.use("/api", apiRouter);

app.listen(3000, () => console.log("Server is running on port 3000"));
