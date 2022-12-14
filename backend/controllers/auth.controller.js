const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');


const login = async (req,res)=>{
    const {email, password} = req.body;
    // finding user based on email
    // lean is to make sure thatit will return json data 
    const user = await User.findOne({ email: email }).lean();
    //if there is no such user return invalid credentials
    if(!user) return res.status(404).json({message:"Invalid credentials"});
    // checking password by comparing the input password and the user's password that's located in db
    const isMatch =bcrypt.compare(password , user.password);
    // making sure that the password is matched 
    if(!isMatch) return res.status(404).json({message:"Invalid credentials"});
    // creating a token
    const token = jwt.sign({email:user.email , name:user.name , id : user._id }, process.env.JWT_SECRET_KEY);
     res.status(200).json([user,token]);
}

// signup api
const signup = async (req, res)=>{
    const {name, email, password , user_type , profile_picture} = req.body;
    try{
        const user = new User();
        user.name = name;
        user.email = email;
        user.user_type = user_type;
        user.profile_picture = profile_picture;
        user.password = await bcrypt.hash(password, 10);
        
        await user.save();
        res.json(user)
    }catch(err){
        console.log("hi")
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    login,
    signup
}