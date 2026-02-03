import express from "express";
import dotenv  from "dotenv";

import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/short_url.model.js";
import short_url from "./src/routes/short_url.route.js";
import auth_routes from "./src/routes/auth.routes.js";
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";

dotenv.config("./.env");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// POST - create short URL.
app.use("/api/auth", auth_routes)
app.use("/api/create", short_url)

// GET - Redirection.
app.get("/:id", redirectFromShortUrl)

// Error Handler.
app.use(errorHandler)

//Connecting to MongoDB.
connectDB()

app.listen(3000, () => {
  
  console.log("app is listening on http://localhost:3000");
});


