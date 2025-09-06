// routes/announce.routes.js
import express from "express";
import {
  create,
  getAnnounce,
  updateAnnounce,
} from "../controllers/announce.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, create);


router.get("/getannounce", getAnnounce);

router.put("/updateannounce/:userId", verifyToken, updateAnnounce);

export default router;
