import express from "express";
import dotenv  from "dotenv";
import { nanoid } from "nanoid";
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/shorturl.model.js";

dotenv.config("./.env");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// POST - create short URL.
app.post("/api/create", (req, res) => {
  const { url } = req.body
  const shortUrl = nanoid(7);
  const newUrl = new urlSchema({
    full_url: url,
    short_url: shortUrl,
  })
  newUrl.save()
  res.send(nanoid(7));
});

// GET - Redirection.
app.get("/:id", async (req,res) => {
  const {id} = req.params;
  const url = await urlSchema.findOne({short_url: id})
  if(url) {
    res.redirect(url.full_url);
  } else {
    res.status(404).send("Not Found");
  }
});

//Connecting to MongoDB.
connectDB()

app.listen(3000, () => {
  
  console.log("app is listening on http://localhost:3000");
});


