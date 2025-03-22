const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const User=require("../models/userModel")

require('dotenv').config()

const register=async(req,res)=>{

  /*try{
const {username,password,role}=req.body;
const hashedPassword =await bcrypt.hash(password,10) 
const newUser =new User({username,password:hashedPassword,role})
await newUser.save();
res.status(201).json({message:`User registered with user name${username}`})
}*/

  try {
    const { username, password, role,name,contact,designation,dob } = req.body;

    if (!username || !password || !role) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role,name,contact,designation,dob});

    await newUser.save();
    res.status(201).json({ message: `User registered with username ${username}` });

  } catch (error) {
    console.error("Error during registration:", error); 
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

/*catch(error){
  res.status(500).json({message:`something went wrong`})
}*/


const login=async(req,res)=>{
try{
  const {username,password}=req.body;
  const user=await User.findOne({username})
    if(!user){
      return res.status(404).json({message:`user with ${username} not found`})
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
      return res.status(400).json({message:`Invalid credentials`})
    }
    const token=jwt.sign(
      {id:user._id,role:user.role},
      process.env.JWT_SECRET,
      {expiresIn:"1h"}

     
    )
    res.status(200).json({token,user:{id:user._id, username:user.username,role:user.role}})
  }
  catch(err){
    res.status(500).json({message:`something went wrong`})
  }
}
const ResetPassword=async(req,res)=>{
  try{
    const {username,newpassword}=req.body;
    if (!username || !newpassword) {
      return res.status(400).json({ message: "Username and new password are required" });
    }
    const user=await User.findOne({username})
      if(!user){
        return res.status(404).json({message:`user with ${username} not found`})
       
      }
      else{
        console.log("user found")
      const hashedPassword = await bcrypt.hash(newpassword, 10);
      user.password ={ hashedPassword};
      console.log(user.password)
      console.log(newpassword)

await user.save();

res.status(401).json({ message: "Password reset successfully" });}

    }
    catch(err){
      console.log(err)
      res.status(500).json({message:`something went wrong`})
    }
}
module.exports={
  register,
  login,
  ResetPassword,
}