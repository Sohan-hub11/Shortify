import express from "express";
import dotenv  from "dotenv";

import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/short_url.model.js";
import short_url from "./src/routes/short_url.route.js";
import user_routes from "./src/routes/user.route.js";
import auth_routes from "./src/routes/auth.routes.js";
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser";

dotenv.config("./.env");

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // your React app
    credentials: true //this allows cookies to be sent
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
app.use(attachUser);

// POST - show all urls.
app.use("/api/user",user_routes)

// POST - Authentication.
app.use("/api/auth", auth_routes)

// POST - create short URL.
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


