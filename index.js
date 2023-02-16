const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ name: "alexander", age: 23 });
});

app.listen(3000, () => {
  console.log(`Listening on port http:localhost:3000`);
});
