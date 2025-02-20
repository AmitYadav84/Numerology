import UserModel from "../Models/UserModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SignUp = async (req, res) => {
    try {
        const { firstName, lastName, password, email, doB ,gender} = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: "User Already Exist..",
                success: false
            })
        }
        const userModel = new UserModel({
          firstName,
          lastName,
          password,
          email,
            doB,
          gender
        });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({
            message: "User Registered Successfully...",
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error..",
            success: false
         })
    }
}
const login = async (req, res) => {
    try {
        const { password, email } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = "Auth Failed User or Password is wrong"
        if (!user) {
            return res.status(403).json({
                message: errorMsg,
                success: false
            })
        }
        const isEqualPass = await bcrypt.compare(password, user.password);
        if (!isEqualPass) {
               return res.status(403).json({
                 message: errorMsg,
                 success: false,
               });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

       
        res.status(200).json({
            message: " Login Successfully...",
            success: true,
            jwtToken,
            doB:user.doB,
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error..",
            success: false
         })
    }
}

export { SignUp, login };