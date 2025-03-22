const express = require("express");
//const mongoose = require("mongoose");
const cors = require("cors");
const Issue=require("../models/issueModel")

const app = express();
app.use(express.json());
app.use(cors());


// Issue Schema
const uploadIssue=async (req,res)=>{

// Endpoint for in-charge to post an issue

    try {
        const {issue, description,labNo,issueTime, postedBy } = req.body;
       /* if (postedBy !== "incharge") {
            return res.status(403).json({ message: "Only in-charge can post issues." });
        }*/
        const newissue = new Issue({ issue, description,labNo,issueTime, postedBy });
        await newissue.save();
        res.status(201).json({ message: "Issue posted successfully", newissue });
    } catch (error) { 
        res.status(500).json({ error: error.message });
    }

  }
// Endpoint for admins and technicians to view issues
const viewIssue=async(req,res)=>{

    try {
        const issues = await Issue.find();
        res.status(200).json(issues);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
;
}
module.exports={uploadIssue,viewIssue}


