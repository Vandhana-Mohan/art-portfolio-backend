const Joi = require("joi");
const createValidator = require("./createValidator");

const ImagesSchema = Joi.object({
  title: Joi.string().required(),
  image_url: Joi.string().required(),
  description: Joi.string().allow("").optional(),
  price: Joi.number().min(0).optional().default(0),
  medium: Joi.string().allow("").optional(),
  created_at: Joi.date().optional(),
  is_for_sale: Joi.boolean().optional().default(false),
});

module.exports = createValidator(ImagesSchema); 