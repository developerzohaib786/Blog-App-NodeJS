const mongoose=require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const { tokenCreatorForUser } = require("../services/authentication");

const userSchema=new mongoose.Schema({
fullName:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    unique:true,
},
salt:{
    type:String,
},
password:{
    type:String,
    required:true,
},
profileImageURL:{
    type:String,
    default:"/images/default_user.png",
},
role:{
type:String,
enum:["USER","ADMIN"],
default:"USER",
},
},{timestamps:true});

userSchema.pre("save", function(next){
    const user=this;
    if (!user.isModified("password")) return next(); // Fix condition

    const salt=randomBytes(13).toString("hex"); // Fix encoding
    const hashedPassword=createHmac("sha256",salt).update(user.password).digest("hex");

    user.salt=salt;
    user.password=hashedPassword;
    
    next();
});

userSchema.static("matchPasswordAndGenerateToken",async function(email,password){
    const user=await this.findOne({email});
    if(!user) throw new Error("User not Found!");

    const salt=user.salt;
    const hashedPassword=user.password;

    const userProvidedHash = createHmac("sha256",salt).update(password).digest("hex");
    if (hashedPassword!==userProvidedHash) throw new Error("Incorrect Password!"); 
    
    const token=tokenCreatorForUser(user);
    return token;
})

const User=mongoose.model("user",userSchema);

module.exports=User;