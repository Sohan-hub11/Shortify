import express from 'express';
const router = express.Router();
import {createShortURL} from "../controller/short_url.controller.js";

router.post("/", createShortURL);

export default router;