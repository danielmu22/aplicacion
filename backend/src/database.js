const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/angular-auth',{
//    useNewUrlParser: true,
//    useUnifiedTopology: true
//})

mongoose.connect('mongodb+srv://ruba:qUHrh8pjR7lXbDAn@cluster0.yutof.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));