import express from 'express';
const router = express.Router();
import {createShortURL} from "../controller/short_url.controller.js";
import { attachUser } from '../utils/attachUser.js';

router.post("/", attachUser, createShortURL);

export default router;