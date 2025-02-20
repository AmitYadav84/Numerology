import joi from 'joi'

const signupValidation = (req,res,next) => {
    const schema = joi.object({
      firstName: joi.string().min(3).max(100).required(),
      lastName: joi.string().min(3).max(100),
      password: joi.string().min(4).max(100).required(),
      email: joi.string().email().required(),
      doB: joi.string().required(),
      gender: joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
       return res.status(400).json({
            message: error.details[0].message
        })
    }
    next();
}
const loginValidation = (req,res,next) => {
    const schema = joi.object({
      password: joi.string().min(4).max(100).required(),
      email: joi.string().email().required(),
        });

    const { error } = schema.validate(req.body);
    if (error) {
      return  res.status(400).json({
            message:error.details[0].message
        })
    }
    next();
}
export { signupValidation, loginValidation };