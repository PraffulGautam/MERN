const joi = require('joi'); 

 const validateSignup = async (
  req, res,next
) => {

  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .required(),
  });

  try {

    const result = await schema.validateAsync(packet);
    if (result) {

      next();

    }

  } catch (error) {

    return res.status(451).json({
     error
    });

  }

};

const validateSignin = async (
  req, res,next
) => {

  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi
      .string()
      .required(),
  });

  try {

    const result = await schema.validateAsync(packet);
    if (result) {

      next();

    }

  } catch (error) {

    return res.status(451).json({
     error
    });

  }

};
module.exports = {validateSignup, validateSignin}