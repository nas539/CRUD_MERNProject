const express = require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const employee = require('./routes/employee');
app.use('/employee', employee);
mongoose.connect('mongodb://localhost:27017/mernstack', {
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