
//custom error class for handling errors
class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null // this .data mein hota kya hai
        this.message = message
        this.success = false;
        this.errors = error

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}