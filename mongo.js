import pkg from "mongodb";
import mongoKey from "./keys.js";

async function connectToMongo() {
  const { MongoClient } = pkg;
  const username = "James";
  const database = "test";
  const cluster = "cluster0.y0oqp.mongodb.net";

  const uri = `mongodb+srv://${username}:${mongoKey}@${cluster}/${database}?retryWrites=true&w=majority`;

  const client = await new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client;
}

export async function addToCollection(collectionName, dataObj) {
  const client = await connectToMongo();
  try {
    await client.connect();

    const collection = await client.db().collection(collectionName);

    const insertion = await collection.insertOne(dataObj);
    console.log(insertion.ops);
  } catch (err) {
    console.error("Connection issue: " + err.message);
  } finally {
    client.close();
  }
}
