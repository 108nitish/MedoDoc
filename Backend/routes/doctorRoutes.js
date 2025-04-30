import express from "express";
import { addDoctor } from "../controller/doctorController.js";
import { body } from "express-validator";
const router = express.Router();

const addDoctorValidator = [
  body("name", "Enter the valid name").isLength({ min: 2 }),
  body("email", "Enter the valid email").isEmail(),
  body("education", "Enter the education").isLength({min: 2,}),
  body("experience", "Enter the experience").isLength({ min: 1 }),
  body("specialization", "Enter the specialization").isLength({ min: 1 }),
  body("phone", "Enter the phone").isLength({ min: 10 }),
  body("address", "Enter the address").isLength({ min: 10 }),
  body("description", "Enter the description").isLength({ min: 10 }),
];

router.post("/adddoctor", addDoctorValidator, addDoctor);

export default router;
