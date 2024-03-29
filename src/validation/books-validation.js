import Joi from "joi";


const createBooksValidation = Joi.object({
    code: Joi.string().max(100).required(),
    title: Joi.string().max(100).required(),
    author: Joi.string().max(100).required(),
    stock: Joi.number().required()
})

const getBooksValidation = Joi.number().positive()
export { createBooksValidation, getBooksValidation }