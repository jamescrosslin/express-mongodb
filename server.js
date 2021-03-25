import express from "express";
import { addToCollection } from "./mongo.js";

const app = express();

const userData = {
  name: "James",
  age: 32,
  favoriteFoods: ["rotisserie chicken", "edibles"],
};

app.get("/", async (req, res) => {
  const data = req.params;
  const addition = await addToCollection("people", data);
  res.end();
});

app.listen(3000, () => {
  console.log("Running");
});
