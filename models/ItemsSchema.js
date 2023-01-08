
const mongoose = require('mongoose');

const ItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        maxlength: [40, 'Name cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: true,
       
    },
    quantity: {
        type: Number,
        required: [true, 'Please add a quantity'],
       
        
    },


    status: {
        type: String,
        required: [true, 'Please add Status'],
      
       
    },

    price: {
        type: Number,
        required: [true, 'Please add Price'],
      
       
    },

    

})

module.exports = mongoose.models.Item || mongoose.model('Item', ItemsSchema);