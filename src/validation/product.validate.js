import Joi from "joi";

const productValidate = Joi.object({
  name: Joi.string().min(2).required(),
  image: Joi.string(),
  price: Joi.number().required(),
  text: Joi.string(),
  type: Joi.string().required(),
  brand: Joi.string().required(),
});

export default productValidate;
