const { Router } = require("express");

const router = Router();
const Book = require("../models/book");

const { unlink } = require("fs-extra");

const path = require("path");

router.get("/", async (req, res) => {
  const data = await Book.find().sort("-_id");
  res.json(data);
});

router.post("/", async (req, res) => {
  const { title, author, isbn } = req.body;
  const imagePath = "/uploads/" + req.file.filename;
  const newBook = new Book({ title, author, isbn, imagePath });
  await newBook.save();
  res.json({ message: "received, book save :)" });
});

router.delete("/:id", async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  await unlink(path.resolve("./backend/public/" + book.imagePath));
  res.send({ message: "deleted" });
});

module.exports = router;
