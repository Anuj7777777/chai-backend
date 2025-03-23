const asyncHandler = (requestHandler) =>{
    (req, res, next)=>{
        Promise.resolve(reqHandler(req,res,next)).catch((error) => next(error));
    }
}
// learn nodejs appi error


export { asyncHandler };

// const asyncHandler = () => {}
// const asyncHandler = (func)=>() =>{}
// const asyncHandler = (func)=> async () =>{}


// // usin try catch block to handle the error
// const asyncHandler = (fn)=> async(req, res, next)=>{
//     try{
//         await fn(req, res, next)

//     }catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message 
//         })
        

//     }
// } // this is wrapper function 