const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookSchema = new Schema ({
    title: { 
        type: String,
        // first value is boolean, second value is error message
        required: [true, "A title is required."],
        minLength: [1, 'Minimum length for the title is 1 character.']
    },
    author: {
        type: String,
        required: [true, 'The author\'s name is required.'],
        minLength: [5, 'Minimum length for the author\'s name is 5 characters.']
    },
    price: {
        type: Number,
        required: [true, 'The price is required.'],
        min: [1, 'Minimum price is $1.']
    },
    numSold: {
        type: Number,
        min: [0, 'Minimum number of copies sold is 0.'],
    }
});

const Book = mongoose.model('Book', bookSchema);

// Sample entry
// const bookSample = new Book({title:'The Kite Runner', author:'Khaled Hosseini', price:15, numSold:25000});

// bookSample.save(); 

module.exports = Book;