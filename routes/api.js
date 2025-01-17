import express from "express";
import * as taskController from "../controllers/taskController.js"
const router = express.Router();

router.get("/createTask", taskController.createTask);
router.post("/readTask", taskController.readTask);

router.get("/TokenEncode",taskController.TokenEncode)
router.get("/task2/TokenDecode",taskController.TokenDecode)

export default router;