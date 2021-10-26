const express = require('express');
const router = new express.Router()
const Task = require('../models/tasks')


// Get tasks
router.get('/tasks', async(req, res) => {
    try{
      const task = await Task.find()
      res.json(task)
    }catch(err){
      res.json({message :err })
    }
 });
 
 // Post tasks
router.post('/tasks', async(req, res) => {
     const task = new Task({
         title : req.body.title,
         description : req.body.description
     })
     try{
         const savedTask = await task.save()
         res.json(savedTask) 
 
     }catch(err){
         res.json({message : err})
     }
     
 });
 
 
 // get tasks by their Id
router.get('/tasks/:id', async(req, res) => {
     
     try{
         const task = await Task.findById( req.params.id)
         res.json(task)
     }catch(err){
         res.json({mesaage : err})
     }
 });
 
 // Delete tasks
router.delete('/tasks/:id', async (req, res) => {
    try{
       const removeTask = await Task.remove({_id : req.params.id})
       res.json(removeTask)
    }catch(err){
        res.json({message : err})
    }
 });
 
 // Update tasks
router.patch('/tasks/:id', async (req, res) => {
     try{
      const updatedTask = await Task.updateOne(
         {$set : {title: req.body.title}}
     )
     res.json(updatedTask)
     }catch(err){
        console.log(res.json(err))
     }
 });

 module.exports = router
 