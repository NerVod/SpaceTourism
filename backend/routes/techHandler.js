const tech = require("../model/tech")


exports.getLaunch = async (req, res) => {
    try {
        console.log("sur la route /launch")
        const launchData = await tech.findOne(
            {name: "Launch vehicle"}, (err, data) => {
                if(!err){
                    res.json(data)
                } else {
                    console.log("err else getLaunch")
                }
            }
        )
    } catch {
        console.log("err catch getLaunch")
    }
};

exports.getSpaceport = async (req, res) => {
    try {
        console.log("sur la route /spaceport")
        const spaceportData = await tech.findOne(
            {name: "Spaceport"}, (err, data) => {
                if(!err){
                    res.json(data)
                } else {
                    console.log("err else getSpacePort")
                }
            }
        )
    } catch {
        console.log("err catch getSpacePort")
    }
};

exports.getCapsule = async (req, res) => {
    try {
        console.log("sur la route /capsule")
        const capsuleData = await tech.findOne(
            {name: "Space capsule"}, (err, data) => {
                if(!err){
                    res.json(data)
                } else {
                    console.log("err else getCapsule")
                }
            }
        )
    } catch {
        console.log("err catch getCapsule")
    }
};