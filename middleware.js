const express = require("express");
const z = require("zod");

const scheme = z.array(z.number());
const app = express();

app.use(express.json());

app.post("/health", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = scheme.safeParse(kidneys);
  if (!response.success) {
    res.status(500).json({
      msg: "Somethings up with your server!",
    });
  }
  const kidneyLength = kidneys.length;
  res.send("You have " + kidneyLength + " No.of Kidneys.");
});

app.use(function (err, req, res, next) {
  res.status(500).json({
    msg: "Some thing is wrong with the server!",
  });
});

app.listen(3000);
