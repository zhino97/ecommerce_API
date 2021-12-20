import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  //   name: String,
  //   price: Number,
  //   image: String,
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  text: {
    type: String,
  },
  type: {
    type: String,
  },
  brand: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
