const JWT=require("jsonwebtoken");

const secret="company@123";

function tokenCreatorForUser(user){
    const payload={
        _id:user._id,
        email:user.email,
        profileImageURL:user.profileImageURL,
        role:user.role,
    }
    const token=JWT.sign(payload,secret);
    return token;
}

function tokenValidator(token){
    const payload= JWT.verify(token,secret);
    return payload;
}

module.exports={
tokenCreatorForUser,
tokenValidator,
};