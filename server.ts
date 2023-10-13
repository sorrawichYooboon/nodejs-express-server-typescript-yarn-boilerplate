import express from "express";

const app = express();
const port = 8080;

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
