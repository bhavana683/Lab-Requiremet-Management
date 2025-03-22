
const mongoose = require("mongoose");
const issueSchema = new mongoose.Schema({
    issue: String,
    description: String,
    labNo:{type:Number},
    issueTime:{type:String},
    postedBy: { type: String },
   
    createdAt: { type: Date, default: Date.now }
   
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Issue", issueSchema);