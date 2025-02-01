const express=require("express");
const path=require("path");

const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");
const { checkForCookie } = require("./middlewares/authentication");

const userRoute=require("./routes/user");
const blogRoute=require("./routes/blog");
const Blog=require("./models/blog")

const app=express();
const PORT=8000;

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(checkForCookie("token"));
app.use(express.static(path.resolve("./public")));
// for testing purposes
app.use("/images", express.static(path.join(__dirname, "public/images")));





mongoose
.connect("mongodb://localhost:27017/blogDB")
.then(()=>{console.log("MongoDB connected!")})
.catch((err)=>{console.log(err)});

app.set("view engine","ejs");
app.set("views", path.resolve("./views"));


app.get("/",async (req,res)=>{
const allBlogs= await Blog.find({});
res.render("home",{
    user:req.user,
    blogs:allBlogs,
});
});

app.use("/user",userRoute);
app.use("/blog",blogRoute);

app.listen(PORT,()=>{
    console.log(`Server has started listening on Port: ${PORT}`)
});