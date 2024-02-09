import { Router } from "express";
import * as answerController from "./answer.controller.js";

const router = Router();

router.get("/", answerController.getAnswers);
router.post("/", answerController.addAnswers);

export default router;
