import { Router } from "express";
import productValidate from "../validation/product.validate.js";
import Product from "../models/product.model.js";

const productRoute = Router();

productRoute.get("/products", async (req, res) => {
  const product = await Product.find({});
  res.json(product);
});

productRoute.post("/products", async (req, res) => {
  try {
    await productValidate.validateAsync(req.body);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
  console.log(req.body);
  const product = new Product(req.body);
  await product.save();
  res.json({ message: "Product created" });
});

export default productRoute;
