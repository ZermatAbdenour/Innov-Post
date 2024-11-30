const jwt = require('jsonwebtoken');

const authentication=async(req,res,next)=>{
    authHeader = req.headers.authorization;
    if(!authHeader||!authHeader.startsWith('Bearer')){
        return res.status(401).json({message:"Token not provided"});
    }

    const parts = authHeader.split(' ');

    try{
        const decoded = jwt.verify(parts[1], process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({message:"Token invalid"});
    }
}

module.exports = authentication