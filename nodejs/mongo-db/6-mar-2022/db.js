const mongoose = require('mongoose');
const uri =
  "mongodb+srv://bmj-nodejs:bmj-nodejs@bmjcluster.qjbj7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri)
.then(() => {
    console.log('connected')
})
.catch((e) => console.log(e))