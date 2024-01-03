const mongoose =  require("mongoose");
const { dbUrl } = require("../config")
module.exports = {
    connectDB : () =>{ 
        mongoose
        .connect(
            dbUrl
         ).then(() => console.log('MongoDB Connected'))
         .catch(err => console.log(err));
    }
}
