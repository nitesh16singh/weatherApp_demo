const axios =  require("axios");
const  { geoTagUrl, openWeatherKey} =  require("./config");

const getWeatherDetails  = async (city) => {
    try { 
        if(!city) throw Error("city is required");
        const response  =  await axios.get(`${geoTagUrl}?q=${city}&appid=${openWeatherKey}`);
        return response.data;
    } catch(err) {
        throw err;
    }
};

module.exports = {
    getWeatherDetails
}