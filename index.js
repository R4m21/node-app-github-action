import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(`hello world from github action: ${process.pid}`);
  res.send(`hello world from github action: ${process.pid}`);
});

app.get("/crash", (req, res) => {
  setTimeout(() => {
    throw new Error(`app crash ho gya hai: ${process.pid}`);
  }, 1000);
});

app.listen(3000, () => {
  console.log(`server start at port 3000`);
});
