const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/employee')
const app = express(); // Add () here to create an instance of the Express application

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");





app.post("/login", (req,res)=>{
    const{email,password}= req.body;
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("Incorrect Password")
            }
        }else{
            res.json("No record Existed")
        }
    })
})


app.post('/', (req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});
