const cors = require("cors");
const bcrypt = require("bcryptjs");
const express = require("express");
const { userCollection } = require("./mongo.js");
const PORT = process.env.PORT || 8000; //port for deployment, otherwise use 8000
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

//posting stuff to database
app.post("/signup", async (req, res) => {
  const formData = req.body.formData;
  const data = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
  };
  try {
    const check = await userCollection.findOne({ email: formData.email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      console.log("not exist");
      await userCollection.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});

app.listen(PORT, () => {
  console.log("port connected");
});
