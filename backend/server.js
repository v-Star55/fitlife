const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

// Connect to MongoDB

mongoose
  .connect("mongodb://localhost:27017")
  .then((resut) => {
    console.log("connected to database");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });

// Create Post Schema
const postSchema = new mongoose.Schema({
  image: String,
  title: String,
  tag: String,
  description: String,
});

const Post = mongoose.model("Post", postSchema);

// API endpoint to get all community posts
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API endpoint to add a community post
app.post("/api/addPost", async (req, res) => {
  try {
    const { image, title, tag, description } = req.body;
    const newPost = new Post({ image, title, tag, description });
    await newPost.save();
    res.json({ message: "Post added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
