import {connect} from "@/dbconfig/dbConfig";
import user from"@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";


connect()


export async function POST(request: NextRequest, response: NextResponse){
    try{
        const reqBody = await request.json();
        const {username, email,password} = reqBody

        console.log(reqBody);
        //check if username exist
        const user = await user.findone({email})

        if(user){
            return NextResponse.json({Error,"user already exists"},{status: 400})

        }

        //hash password
        const salt = await bcryptjs.gensalt(10)
        const hashpassword = await bcryptjs.hash
        (password,salt)
        
        const newUser = new user({
            username,
            email,
            password: hashpassword
        })

        await savedUser = await newUser.saved()
        console.log(savedUser);
        
        return NextResponse.json({
            message: "user created sucessfully"
            sucess:true
            savedUser
        })

        

    } catch(error:any) {
        return NextResponse.json{error:err.message},
        {status:500};

    }
}
