class ExpressError extends Error{
    constructor(statusCode,message){
        super();
        this.sattusCode = statusCode;
        this.message = message;
    }
}

module.exports=ExpressError;