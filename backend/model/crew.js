const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CrewShema = new Schema(
    {
        name: {
            type: String
        },
        images: {
            type: String
        },
        role: {
            type: String
        },
        bio: {
            type: String
        }
    },
    { collection: "crew", timestamps:false }
);

module.exports = mongoose.model("Crew", CrewShema)
