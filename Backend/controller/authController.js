import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { response } from "express";

const JWT_SECRET =
"secret2343411&&&&*9786hrhashtodde6^$ghhUyjerd68&^";

export const signin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json("Try with some other credentials");
    }
    const password_compare = await bcrypt.compare(password, user.password);       // bcrypt.js for password hashing
    if (!password_compare) {
      response.status(400).json("Check Password");
    }
    const data = { id: user._id };
    const authtoken = jwt.sign(data, JWT_SECRET, {
      expiresIn: "15d",
    });
    res.status(200).json({ authtoken: authtoken, user_id: user._id, user: user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
};

export const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }
    const salt = await bcrypt.genSalt(15);
    const hashed_password = await bcrypt.hash(req.body.password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/username?username=${req.body.fullName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/username?username=${req.body.fullName}`;

    user = await User.create({
      fullName: req.body.fullname,
      email: req.body.email,
      password: hashed_password,
      gender: req.body.gender,
      profilePic: req.body.gender === "female" ? girlProfilePic : boyProfilePic,
    });
    res.status(200).json({ message: "User created successfully", user: user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
