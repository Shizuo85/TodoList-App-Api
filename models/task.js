const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "must provide title"],
        trim : true
    },
    description: {
        type: String,
        required: [true, "must provide description"],
        trim : true
    },
    timeStamp:{
        type: Date,
        default: Date.now()
    },
    createdBy:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        select: false
    }
})

module.exports = mongoose.model("Task", TaskSchema)