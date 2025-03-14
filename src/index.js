const express =require("express")
const dotenv=require("dotenv").config();
const dbConnect=require("./config/dbConnect")
const authRoutes=require("./routes/authRoutes")
const userRoutes=require("./routes/userRoutes")
const cors=require("cors")

dbConnect();

const app=express();
//Middleware
app.use(express.json())
app.use(express.urlencoded({extend:true}))
app.use(cors({
  origin:"http://localhost:3000",
  methods:["GET" ,"POST","PUT","DELETE"],
  credentials:true}))
//Routes
app.use("/api/auth",authRoutes)
app.use("/api/users/",userRoutes)


const PORT=process.env.PORT||7002
app.listen(PORT,()=>{
  console.log(`server is running at port${PORT}`)
}
)
