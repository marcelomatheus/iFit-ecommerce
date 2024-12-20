import mongoose from "mongoose"
import bcrypt from "bcrypt"

//email, password, token, 
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
});

userSchema.methods.verifyPassword = async function(password){
    const user = this;
    const isMatch = await bcrypt.compare(password,user.password);
    return isMatch;
};

const User = mongoose.model("User", userSchema);
export default User;