const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})


noteSchema.statics.execute = function(action) {
    if(action.type === 'add') {
       //get the users note
       
        return this.create({
            text: action.payload
        })
        // console.log(`Note Made: ${action.payload}`)
        
    } 
    // select * from notes 
    else if (action.type === 'list') {
        return this.find();
    }

    else if(action.type === 'delete') {
        this.findByIdAndDelete()
    }
}

module.exports = mongoose.model('Note', noteSchema)