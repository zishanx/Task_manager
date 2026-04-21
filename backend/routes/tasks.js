const express = require("express")
const router = express.Router()
const Task = require('../models/task')


router.get('/', async(req,res)=>{
    try{
        const filter = {}
        if(req.query.completed !== undefined){
            filter.completed = req.query.completed === 'true'
        }
        const tasks = await Task.find(filter)
        res.json(tasks)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

router.post('/',async (req,res)=> {
    try{
        const task = new Task(req.body)
        await task.save()
        res.status(201).json(task)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

router.put('/:id', async (req,res)=>{
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(task)
    } catch (error) {
        res.status(400).json({err: error.message})
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        await Task.findByIdAndDelete(req.params.id)
        res.json({message:'Task Deleted'})
    }catch(err){
        res.status(500).json({error: err.message})
    }
})

module.exports = router