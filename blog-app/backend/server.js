import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './models/User.js';
import auth from './middleware/auth.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/blogDB");


// REGISTER
app.post("/register", async (req,res)=>{
    const hashed = await bcrypt.hash(req.body.password,10);
    const user= new User({
        name:req.body.name,
        email:req.body.email,
        password:hashed
    });
    await user.save();
    res.json({message:"User Registered Successfully"});
});


// LOGIN
app.post("/login", async (req,res)=>{
    const user= await User.findOne({email:req.body.email});

    if (!user) return res.status(400).send("User not found"); // ✅ FIX

    const isMatch=await bcrypt.compare(req.body.password,user.password);
    if(!isMatch) return res.status(400).send("Invalid Credentials");

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
    );

    res.json({ token });
});


// PROTECTED ROUTE
app.get("/posts",auth,(req,res)=>{
    res.json([
        {title: "Post1"},
        {title: "Post2"}
    ]);
});


// ✅ REQUIRED to run server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});