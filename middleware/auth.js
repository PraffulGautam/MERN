const jwt = require('jsonwebtoken');
const User = require('../user/user.model');

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decode = await jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        req.user = await User.findById(decode._id);
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({message: "Unauthorized request"});
    }
} 
module.exports = authenticate;