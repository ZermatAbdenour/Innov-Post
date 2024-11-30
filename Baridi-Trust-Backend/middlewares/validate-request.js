
const validateRequest =(schema)=>{
    return (req,res,next)=>{
        result = schema.validate(req.body)

        if(result.error){
            return res.status(400).json(result.error.details[0].message)
        }
        req.body = result.value
        next()
    }
}

module.exports = validateRequest