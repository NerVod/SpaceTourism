const crew = require("../model/crew");

exports.getCommander = async (req, res) => {
    try {
        console.log('sur la route /commander');
        const commanderData = await crew.findOne(
            {role: "Commander"}, (err, data) => {
                if(!err){
                    res.json(data)
                } else {
                    console.log('err else getCommander')
                }
            }
        )
    } catch {
        console.log("err catch get data commander")
    }
}
exports.getSpecialist = async (req, res) => {
    try {
        console.log('sur la route /specialist');
        const specialistData = await crew.findOne(
            {role: "Mission Specialist"}, (err, data) => {
                if(!err){
                    res.json(data)
                } else {
                    console.log('err else getSpecialist')
                }
            }
        )
    } catch {
        console.log("err catch get data specialist")
    }
}
exports.getPilot = async (req, res) => {
    try {
        console.log('sur la route /pilot');
        const pilotData = await crew.findOne(
            {role: "Pilot"}, (err, data) => {
                if(!err){
                    res.json(data)
                } else {
                    console.log('err else getPilot')
                }
            }
        )
    } catch {
        console.log("err catch get data pilot")
    }
}
exports.getEngeneer= async (req, res) => {
    try {
        console.log('sur la route /engeneer');
        const engeneerData = await crew.findOne(
            {role: "Flight Engineer"}, (err, data) => {
                if(!err){
                    res.json(data)
                } else {
                    console.log('err else getEngeneer')
                }
            }
        )
    } catch {
        console.log("err catch get data engeneer")
    }
}