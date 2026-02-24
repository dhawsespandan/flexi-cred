const bcrypt = require('bcryptjs');
const User = require('../model/user');
const jwt = require('jsonwebtoken');

exports.register = async(req , res)=>{
    const hashedPassword = await bcrypt.hash(req.body.password,10);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    await user.save();
    res.status(201).json({message:'User registered'});
};

exports.login = async(req,res)=>{
    const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).json({message:'Invalid email'});

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if(!isMatch) return res.status(400).json({message: 'Invalid credentials'});

    const token = jwt.sign(
        { userId: user._id},
        "i_am_learning_security_with_jwt",
        {expiresIn: '1h'}
    );
    res.json({token});
}

exports.getProfile = async(req,res)=>{
    const user = await User.findById(req.user.userId);
    res.json(user);
};