const userModel = require('../models/authUser.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


async function login(req,res) {
    const { email, password } = req.body || {};
    if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
    }

    const isUserExist = await userModel.findOne({email})
    if(!isUserExist){
        return res.status(400).json({
            message:"Invalid email or password"
        });
    }

    const isPasswordValid =await bcrypt.compare(password,isUserExist.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid email or password"
        });
    }

    const token = jwt.sign({
        id:isUserExist._id
    },process.env.SECRET)

    res.cookie("token",token)

    res.status(200).json({
        message:"User Login Succesfully",
        user:{
            id:isUserExist._id,
            email:isUserExist.email,
            username:isUserExist.username
        }
    })


}

async function register(req,res){
    
    const { username , email, password } = req.body;

    

    const existUser = await userModel.findOne({email})
    if(existUser){
        return res.status(400).json({
            message:"User Already Exist"
        })
    }

    const hassedPassword =await bcrypt.hash(password,10);

    const newUser = await userModel.create({
        username,
        email,
        password:hassedPassword
    })

    const token = jwt.sign({
        id:newUser._id
    },process.env.SECRET)

    res.cookie("token",token)

    return res.status(201).json({
        message:"User Created",
        user:{
            id:newUser._id,
            username:newUser.username,
            email:newUser.email
        }
    })

    
}

module.exports = {
    login,
    register
}