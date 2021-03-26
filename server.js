import express from "express";
import { addToCollection } from "./mongo.js";

const app = express();

app.use(express.urlencoded());
app.use(express.json());

const userData = {
  name: "James",
  age: 32,
  favoriteFood: "rotisserie chicken",
};

app.get("/", async (req, res) => {
  const data = userData;
  addToCollection("people", data);
  res.end();
});

app.listen(3000, () => {
  console.log("Running");
});
