const mongoose = require('mongoose')

//creating database schema
const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    house: {type: String},
    wizard: {type: String, required: true}
})

//creating house randomizer function for entire schema
studentSchema.methods.randomizeHouse = function randomizeHouse() {
    const randomNum = Math.random();
    if(randomNum<1/4)
        this.house = 'Gryffindor'
    else if(randomNum<1/2)
        this.house = 'Hufflepuff'
    else if(randomNum<3/4)
        this.house = 'Ravenclaw'
    else
        this.house = 'Slytherin'
}

//exporting schema
module.exports = mongoose.model('Student', studentSchema)