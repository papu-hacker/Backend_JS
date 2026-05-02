
import mogoose from "mongoose";

const userSchema = new mogoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        }
    }
    , { timestamps: true });

export const User = mogoose.model("User", userSchema);