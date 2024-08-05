const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Student=require('./Student.js')

const app=express();

mongoose.connect('mongodb+srv://dattankit:lGpaYG44RhrxHqOi@cluster0.n5ibq4d.mongodb.net/hogwarts')
  .then(()=> console.log('Connected to MongoDB'))
  .catch(e=> console.log(e))

app.use(bodyParser.urlencoded({extended: true}));//express.json, bodyParser.json

app.post('/students', async (req,res)=> {
  try {
    const newStudent = await Student.create(req.body)
    newStudent.randomizeHouse()
    const response = await newStudent.save();
    res.status(201).json(response)
  } catch(e) {
    res.status(400).json(e)
  }
});

app.delete('/students/:id', async(req,res)=> {
  try {
    const muggle = await Student.findOneAndDelete({_id: req.params.id})
    res.status(200).json(muggle)
  } catch(e) {
    res.status(500).json(e)
  }
})

/*
app.put('/students/:id', async(req,res)=> {
  try {
    await Student.updateOne({_id: req.params.id}, {house: 'Ravenclaw'})
  } catch(e) {
    res.json(e)
  }
})
*/

app.listen(3000,()=>{
  console.log('listening on port 3000');
});