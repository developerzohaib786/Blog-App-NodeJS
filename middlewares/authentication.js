const {tokenValidator}=require("../services/authentication");

function checkForCookie(cookieName){
    return (req,res,next)=>{
        const tokenCookieValue= req.cookies[cookieName];
        if(!tokenCookieValue){
           return  next();
        } 
    
    try {
        const userPayload=tokenValidator(tokenCookieValue);
        req.user = userPayload;
    } catch (error) {}
    return next();
};
}

module.exports={
    checkForCookie,
}
