import express from 'express'
import { loginValidation, signupValidation } from '../middlewares/AuthValidation.js';
import { login,  SignUp } from '../Controller/AuthController.js';
const router = express.Router();

router.post("/login",loginValidation,login)
router.post("/register", signupValidation, SignUp)

export default router;