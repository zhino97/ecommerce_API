import express from "express";
import userRouter from "./src/routes/user.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./src/routes/product.routes.js";
import cors from "cors";

async function main() {
  //setup .env varibles
  dotenv.config("dotenv");
  // await mongoose.connect("mongodb://localhost:27017/commerce_database"); ///aygorin
  await mongoose.connect(process.env.MONGO_URL);
  const app = express();

  //
  app.use(cors());
  //parse the body
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  //setup router
  app.use(userRouter);
  app.use(authRouter);
  app.use(productRoute);

  // app.listen(5000, () => {
  //   console.log("listening on http://localhost:5000");
  // });
  app.listen(process.env.PORT, () => {
    console.log("listening on http://localhost:" + process.env.PORT);
  });
}

main();
