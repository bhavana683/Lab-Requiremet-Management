const express=require("express")
const {register,login,ResetPassword}=require("../controllers/authController")
const {uploadIssue,viewIssue}=require("../controllers/issueDetails")
const router=express.Router();
router.post("/register",register);
router.post("/login",login);
router.post("/ResetPassword",ResetPassword);
router.post("/inupload-issue",uploadIssue)
router.get("/inviewhistory",viewIssue)
module.exports=router
