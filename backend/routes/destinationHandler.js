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