import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import User from '../models/user.model.js';
dotenv.config();

const protectRoute = async (req,res,next)=>{
    try {
        // console.log(token);
        const token = await req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorised - No tokens provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
         
        if(!decoded){
            return res.status(401).json({error:"Unauthorised - No tokens provided"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            res.status(404).json({error:"User Not Found"});
        }

        req.user = user;
        next();


    } catch (error) {
            console.log("Error in protectRoute middleware", error.message);
            res.status(500).json({error:"Inter Server Error While checking the tokens in protectRoutes"})
    }
}

export default protectRoute;