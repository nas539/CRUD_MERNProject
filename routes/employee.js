const express = require('express');
const employeeRouter = express.Router();
const Employee = require('../model/employee')

employeeRouter.get('/',(req,res)=> {
    Employee.find({}, (err,response) => {
            if (err)
                res.status(500).json({message: {
                    msgBody: "Unable to get employee",
                    msgError: true
                }});
             else
                res.status(200).json(response);
    });
});

employeeRouter.post('/', (req,res) => {
    const employee = new Employee(req, body);
    employeeRouter.save((err,document) => {
        if (err)
                res.status(500).json({message: {
                    msgBody: "Unable to add employee",
                    msgError: true
                }});
        else
            res.status(200).json({message:{
                msgBody: "Success",
                msgError: false
        }})
    });
});

employeeRouter.delete('/:id',(req,res) => {
    Employee.findByIdAndDelete(req.params.id,err => {
        if(err)
        res.status(500).json({message: {
            msgBody: "Unable to delete employee",
            msgError: true
        }});
        else
            res.status(200).json({message:{
                msgBody: "Success",
                msgError: false
        }});
    });
});

employeeRouter.put(':id', (req,res) => {
    Employee.findOneAndUpdate(req.params.id, req.body, {runValidators: true}, (err, response) => {
        if(err)
        res.status(500).json({message: {
            msgBody: "Unable to update employee",
            msgError: true
        }});
        else
            res.status(200).json({message:{
                msgBody: "Success",
                msgError: false
        }});
    });
});

module.exports = employeeRouter;