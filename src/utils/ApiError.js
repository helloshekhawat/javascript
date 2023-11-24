class ApiError extends Error {
    constructor(
      statusCode,
      message = "BKL check the error",
      errors = [],
      stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null // study what is in data field
        this.message = message
        this.success = false;
        this.errors = errors
        if (stack) {
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }