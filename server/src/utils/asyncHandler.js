// const asyncHandler = (function) => { async (req,res,next) =>{ }}


const asyncHandler = (requestHandler) => {
   return  (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))  // taking resolve function provided by promise and using catch if anything went wrong inside of that resolve method
    }
}



export { asyncHandler }


// same thing try-catch syntax

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)

//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
