const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const BlogSchema = new Schema({
  title: String,
  body: String,
  createdAt: Number,
  username: String,
  userId:String
});

module.exports = model("Blog", BlogSchema);
