
import Joi from "@hapi/joi";
import validateWith from '../../../../utils/handle-varidate'

const createProductSchema = Joi.object({
    name: Joi.string(),
    price: Joi.string(),
    categoryName: Joi.string().allow(null, ''),
    description: Joi.string().allow(null, ''),
})

const varidateCreateProductSchema = input => validateWith(createProductSchema)(input)

export default varidateCreateProductSchema

