import { Router } from "express";
import User from "../models/user.model.js";
import userValidate from "../validation/user.validate.js";
import { isAdmin } from "../middleweares/auth.middleweares.js";

const userRouter = Router();

userRouter.get("/users", (req, res) => {
  res.send("hello ");
});

userRouter.post("/users", isAdmin, async (req, res) => {
  try {
    await userValidate.validateAsync(req.body);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User Created" });
});

export default userRouter;
