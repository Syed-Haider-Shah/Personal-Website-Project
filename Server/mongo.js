const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/renopilots") //new node version doesnt accept keyword  localhost, be careful!
  .then(() => {
    console.log("mongo connected");
  })
  .catch((error) => {
    console.log(error);
  });
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: false,
    length: 4,
  },
  state: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  choice: {
    type: String,
    required: true,
  },
});

/*const conSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});*/

const userCollection = mongoose.model("userCollection", userSchema);

const collection = {
  userCollection,
};

module.exports = collection;
