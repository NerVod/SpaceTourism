const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanetSchema = new Schema(
    {
        name: {
            type: String,
            required:true
        },
        images: {
            type : String
        },
        description: {
            type: String
        },
        distance: {
            type: String
        },
        travel: {
            type: String
        }
    },
    { collection: "destination", timestamps:false }
);

module.exports = mongoose.model("Planet", PlanetSchema)