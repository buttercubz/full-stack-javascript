const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

require("./database");

// * settings
app.set("port", process.env.PORT || 3000);

// * <- middlewares
app.use(morgan("dev"));
app.use(cors());

// * <- multer config

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename(req, file, callback) {
    callback(null, new Date().getTime() + path.extname(file.originalname));
  },
});

app.use(multer({ storage }).single("image"));

// * multer config ->

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// * middleware ->

// * routes

app.use("/api/books", require("./routes/books"));

// * static files
app.use(express.static(path.join(__dirname, "public")));

// * server

app.listen(app.get("port"), () => {
  console.log("mode: " + process.env.NODE_ENV);
  console.log("server on port: ", app.get("port"));
});
