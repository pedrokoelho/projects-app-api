const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a Title']
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Project', projectSchema)