import { validationResult } from "express-validator";
import Doctor from "../models/doctorModel.js";

export const addDoctor = async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {name, email, education, experience, specialization, phone, address, description} = req.body;

  try {
    let doctor = await Doctor.findOne({ email: req.body.email });
    if (doctor) {
      return res.status(400).json({ error: "Doctor already exist" });
    }

    doctor = await Doctor.create({
        name: name,
        email: email,
        education: education,
        experience: experience,
        specialization: specialization,
        phone: phone,
        address: address,
        description: description,
      });
      res.status(200).json({ message: "Doctor added successfully", doctor: doctor });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
