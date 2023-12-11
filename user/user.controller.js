const User = require('./user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10; 



const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = await User.find({email});
        console.log(user)
        if(user.length){
            return res.status(400).json({msg:"email already exist"})
        }
        const hash = await bcrypt.hash(password, saltRounds);
        const data = {
            name, email, password: hash
        }
        
        const add  = new User(data);
        await add.save();
        return res.status(201).json({msg: "signup success"});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "error"})    
    }
}

const signin = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({msg: "Email not found"})
    }
    const verify = await bcrypt.compare(password,user.password);
    if(verify){
        const token = await jwt.sign({
            _id: user._id,
            email: user.email,
            name: user.name
        },process.env.JWT_PRIVATE_KEY);
    
        res.status(200).json({message:'success', token});
    }else{
        return res.status(401).json({msg: "Invalid Password"})
    }
}

module.exports = {
    signup,
    signin
}