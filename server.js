const { addToCollection } = require("./mongo.js");
const express = require("express");
const app = express();
app.use(express.urlencoded());
app.use(express.json());

const userData = {
  name: "James",
  age: 32,
  favoriteFood: "rotisserie chicken",
};

app.get("/", (eventFromClient, eventFromServer) => {
  console.log(eventFromClient);
  eventFromServer.end();
});

app.listen(3000, () => {
  console.log("Running");
});
app.addEventListener("3000", (eventFromClient, eventFromServer) => {
  console.log("running");
});
