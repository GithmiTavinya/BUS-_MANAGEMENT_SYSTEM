const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const busSchema = new Schema({

    busRegNum : {
        type : String,
        required: true
    },

    amountOfSeats : {
        type : Number,
        required: true
    },

    busType : {
       type : String,
       required: true
   },

   driver : {
       type : String,
       required: true
    },

    conductor : {
       type : String,
       required: true
   },

   route : {
       type : String,
       required: true
   },

});

const Bus = mongoose.model("Bus", busSchema);

module.exports = bus;