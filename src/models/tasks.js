const { string } = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title : {
        type : String,
        requried : true
    },

    description : {
        type : String, 
        required : true
    }
});

const Task =  new mongoose.model('Task', TaskSchema)

module.exports = Task