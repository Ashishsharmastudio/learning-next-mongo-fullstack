import mongoos from "mongoose";

const userSchema = new mongoose.schema({
    username: {
        type: string,
        required: [true, "please provide a email"],
        unique:true,
    },
    email:{ 
         type: string,
         required: [true, "please providea email"]
         unique: true,
    },
    password:{ 
      type: string,
      required: [true, "please provide a password
    }
    isverified:{
      type: boolean,
      default: false,
    },
    isAdmin:{ 
      type: Boolean,
      default: false,
    },
    forgotPasswordToken:{ string,
    forgotPasswordTokenExpiry: Date,
    VerifyToken: string,
    VerifyTokenExpiry:Date,
})
const User = mongoose.model.users || mongoose.model
("users", userSchema);

export default User;