const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechSchema = new Schema(
    {
        name: {
            type: String,
            required:true
        },
        images: {
            type : Object
        },
        description: {
            type: String
        }
    },
    { collection: "technology", timestamps:false }
);

module.exports = mongoose.model("Tech", TechSchema)