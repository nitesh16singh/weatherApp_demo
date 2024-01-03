const  { Schema , model } =  require("mongoose");

const WeatherModal =  new Schema({
    city: String,
    temp: Number,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    pressure: Number,
    humidity : Number,
    createdAt: Date
});

module.exports = model("weather", WeatherModal);


