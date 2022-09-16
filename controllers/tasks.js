const Task = require("../models/task")
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/users');
const AppError = require('../utils/appError');

const getAllTasks =  catchAsync ( async (req, res, next) => {
    const tasks = await Task.find({createdBy:req.user.id})
    if(!tasks){
        return next(new AppError("You have no pending tasks", 404))
    }
    res.status(200).json({tasks})
})

const createTask =  catchAsync( async (req, res) => {
    req.body.createdBy = req.user.id
    const task = await Task.create(req.body)
    res.status(201).json({task})

})

const getTask = catchAsync( async (req, res, next) => {
    const singleTask = await Task.findOne({_id : req.params.id, createdBy: req.user.id})

    if(!singleTask){
        return next(new AppError(`no task with id : ${req.params.id}`, 400))
    }
    res.status(200).json({singleTask})
})

const updateTask =  catchAsync( async (req, res, next) => {
    const updateTask = await Task.findOneAndUpdate({_id : req.params.id, createdBy: req.user.id}, req.body, {
        new:true,
        runValidators : true
    })
    if (!updateTask){
        return next(new AppError(`no task with id : ${req.params.id}`, 404))
    }
    res.status(200).json(updateTask)
   
})

const deleteTask =  catchAsync( async (req, res, next) => {
    const deleteTask = await Task.findOneAndDelete({_id : req.params.id, createdBy: req.user.id})

    if(!deleteTask){
        return next(new AppError(`no task with id : ${req.params.id}`, 404))
    }
    res.status(200).json({deleteTask})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}