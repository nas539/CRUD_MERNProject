const express = require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'client', 'build', 'index.html' ));
    })
}


const employee = require('./routes/employee');
app.use('/employee', employee);

const uri = process.env.mongodb || 'mongodb://localhost:27017/mernstack';
mongoose.connect(uri, {
    useNewUrlParser = true,
    useFindAndModify: false
},(err) => {
    if (err) {
        process.exit(1);
        console.log("Unable to connect");
    } 
    else
        console.log('Success')
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("app is running")
})