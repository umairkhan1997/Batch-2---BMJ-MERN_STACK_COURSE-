const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://bmj-nodejs:bmj-nodejs@bmjcluster.qjbj7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const products = [
  {
    name: "Product 3",
    category: "xyz",
    currency: "pkr",
  },
  {
    name: "Product 4",
    price: 200,
    currency: "pkr",
  },
  {
    category: "xyz",
    price: 200,
    currency: "pkr",
  },
];
client
  .connect()
  .then(() => {
    const collection = client.db("bmj").collection("products");
    const product = {
      name: "Product 2",
      category: "xyz",
      price: 200,
      currency: "pkr",
    };
    collection
      .insertMany(products)
      .catch((e) => {
        console.log(e);
      });

    collection
      .insertOne(product)
      .catch((e) => {
        console.log(e);
      });
  })
  .catch((e) => console.log(e));
