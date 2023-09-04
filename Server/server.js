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

app.post("/myaccount", async (req, res) => {
  try {
    const email = req.body.cookieValue;
    const check = await userCollection.findOne({ email: email });
    res.json(check.name);
  } catch (e) {}
});

//posting stuff to database from signup
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
    console.log(e);
  }
});

//posting stuff to database from login
app.post("/login", async (req, res) => {
  const formData = req.body.formData;
  console.log(formData.password);
  try {
    const check1 = await userCollection.find({ email: formData.email });
    const check2 = await userCollection.find({
      $and: [{ email: formData.email }, { password: formData.password }],
    });

    if (!Object.keys(check1).length == 0) {
      if (!Object.keys(check2).length == 0) {
        res.json("loginPass");
        //  console.log(check2);
      } else {
        res.json("loginFail");
        console.log(check2);
      }
    } else {
      res.json("nouser");
      // console.log(check2);
    }
  } catch (e) {
    res.json("fail");
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log("port connected");
});
