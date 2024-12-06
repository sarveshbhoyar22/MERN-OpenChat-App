import express from "express";
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
dotenv.config();


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routs.js"; 
import userRoutes from "./routes/user.routs.js"; 

import connectToMongoDB from "./DB/connectToMongoDb.js";


const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser()); // to parse the incoming cookies from (req.cookies)
app.use(express.json()); // to parse the incoming requests with the JSON payloads (from req.body);

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


app.get("/",(req,res)=>{
    res.send("Hello World!");
})

app.listen(port,()=>{
    connectToMongoDB();
    console.log(`server running on port ${port}`)
})
