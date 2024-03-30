import express from "express";
import healthController from "./healthController";

const router = express.Router();

router.get('/', healthController.alive);

export default router;