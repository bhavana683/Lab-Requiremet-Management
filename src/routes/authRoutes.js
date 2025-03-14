const express=require("express")
const {register,login,ResetPassword}=require("../controllers/authController")

const router=express.Router();
router.post("/register",register);
router.post("/login",login);
router.post("/ResetPassword",ResetPassword);

module.exports=router
