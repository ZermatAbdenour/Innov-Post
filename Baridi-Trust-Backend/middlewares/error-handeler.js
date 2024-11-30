const errorHandeler = (err,req,res,next) =>{
    console.error(err.stack)
    res.status(err.statusCode || 500).json({
        message: err.message || 'Internal Server Error',
      });
}
module.exports = errorHandeler