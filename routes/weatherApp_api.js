const express =  require("express");
const routes =  express.Router();
const WeatherModal =  require("../modals/WeatherModal")
const { getWeatherDetails } = require("../openWeatherApi");


routes.get("/all", async (req, res) =>{
    let record  =  await WeatherModal.find({ }) ;
    return res.send(record);
});

routes.get("/:city", async (req, res) => {
    try { 
        const { city } =  req.params;
        if(!city) return res.status(400).send({message: "city is required"});
        const newDate =  new Date();
        newDate.setHours(2);
        let record = await WeatherModal.findOne({ city,  createdAt: { $le : newDate }}) ;
        if(record) return res.send(record);
        record = await getWeatherDetails(city);
        console.log("{ city, data: record.main }", { city, ...record.main })
        await WeatherModal.create({ city, ...record.main, createdAt: new Date() }) ;
        return res.send({ city, ...record.main });
    }  catch(err) {
        res.status(400).send({message: err.message})
    }
});


routes.post("/delete/:city", async (req, res) =>{
    const { city } =  req.params;
    if(!city) return res.status(400).send({message: "city is required"});
    await WeatherModal.deleteOne({ city }) ;
    res.send({message: "record deleted"})
});

module.exports = routes;
