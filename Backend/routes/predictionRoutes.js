import express from "express";
import { body } from "express-validator";
import { predictDisease } from "../controller/predictionController.js";
const router = express.Router();

const predictValidator = [
  body("features", "Please enter the symptoms").isLength({ min: 1 }),
];

router.post("/predict", predictValidator, predictDisease);

export default router;