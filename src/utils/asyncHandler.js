const asyncHandler = (requestHandler) => {

    return (req, res, next)=>{
         Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
 
     }
 }
 
 export {asyncHandler}
// async function in try catch method second method is promise method

/* 
const asyncHandler = (fn)=> async (req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(err.code || 404).json({
            success: false,
            message: err.message
        })
    }
}

*/


