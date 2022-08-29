const express = require("express");
const router = require("./Routes/routes");
const conn = require("./Database/conn");
const notFound = require("./Errors/NotFound");

const app = express();
const port = 3000;

app.use(express.json());

app.use((error, req, res, next) => {
  if (error instanceof notFound) {
    status = 404;
  }

  res.send(status);
});

app.use(router);

conn
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("Esta rodando na porta: " + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
