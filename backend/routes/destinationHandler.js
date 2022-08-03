const planet = require("../model/planet")


exports.getMoon = async (req, res) => {
    try {
        console.log('sur la route /moon')
        const moonData = await planet.findOne(
            {name: "Moon"}, (err, data) => {
                if(!err){
                    res.json(data)
                } else {
                    console.log('err else getMoon')
                }
            }
        )

    } catch {
        console.log('erreur catch get data moon')
    }
}
exports.getMars = async (req, res) => {
    try {
        console.log('sur la route /mars')
        const marsData = await planet.findOne(
            {name: "Mars"}, (err, data) => {
                if(!err){
                    res.json(data)
                } else {
                    console.log('err else getMars')
                }
            }
        )

    } catch {
        console.log('erreur catch get data mars')
    }
}
exports.getEuropa = async (req, res) => {
    try {
        console.log('sur la route /europa')
        const europaData = await planet.findOne(
            {name: "Europa"}, (err, data) => {
                if(!err){
                    res.json(data)
                } else {
                    console.log('err else getEuropa')
                }
            }
        )

    } catch {
        console.log('erreur catch get data europa')
    }
}
exports.getTitan = async (req, res) => {
    try {
        console.log('sur la route /titan')
        const titanData = await planet.findOne(
            {name: "Titan"}, (err, data) => {
                if(!err){
                    res.json(data)
                } else {
                    console.log('err else getTitan')
                }
            }
        )

    } catch {
        console.log('erreur catch get data titan')
    }
}

exports.warmup = async (req, res) => {
    try {
        console.log("warming up backend server")
        res.json({warmserver: "success"})
    }
    catch {
        console.log('no warmingup server')
    }
}