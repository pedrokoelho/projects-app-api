const asyncHandler = require('express-async-handler')

const Project = require('../models/projectModel')
const User = require('../models/userModel')

// @desc    Get projects
// @route   GET /api/projects
// @access  Private       
const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({user: req.user.id})

    res.status(200).json(projects);
})

// @desc    Create project
// @route   POST /api/projects
// @access  Private       
const createProject = asyncHandler(async (req, res) => {
    if(!req.body.title) {
        res.status(400)
        throw new Error('Please add a title')
    }
    
    const project = await Project.create({
        title: req.body.title,
        user: req.user.id,
    })

    res.status(200).json(project);
})

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private       
const updateProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id)

    if(!project) {
        res.status(400)
        throw new Error('Project not found')
    }

    const user = await User.findById(req.user.id)

    //  Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    
    // Make sure the logged in user matches the project user
    if(project.user.toString() !== user.id) {
        res.status('401')
        throw new Error('User not authorized')
    }

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedProject);
})

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private       
const deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id)

    if(!project) {
        res.status(400)
        throw new Error('Project not found')
    }

    const user = await User.findById(req.user.id)

    //  Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    
    // Make sure the logged in user matches the project user
    if(project.user.toString() !== user.id) {
        res.status('401')
        throw new Error('User not authorized')
    }

    await project.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject
}
