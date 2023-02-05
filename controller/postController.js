require("dotenv").config();
const Post = require("../model/postModel");
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient("mongodb://127.0.0.1");

exports.postView = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("test");
    const collection = db.collection("posts");
    const posts = await collection.find().toArray();
    res.json(posts);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};
exports.postCreate = async (req, res) => {
  try {
    const { idPost, header, body, author, idAuthor, categories } = req.body;
    const newDate = new Date();
    const post = await Post.create({
      idPost,
      header,
      body,
      author,
      idAuthor,
      categories,
      date: newDate.toDateString(),
    });
    res.json("New Post create");
  } catch (error) {
    console.log(error);
  }
};
exports.postDelete = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("test");
    const collection = db.collection("posts");
    const { idPost, idAuthor } = req.body;
    const post = await collection.deleteOne({
      idPost: idPost,
      idAuthor: idAuthor,
    });
    res.json(post);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};
exports.postChange = async (req, res) => {
  res.send("Post change");
};
