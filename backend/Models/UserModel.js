
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    doB: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);
export default User;