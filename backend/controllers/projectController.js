const expressAsyncHandler = require("express-async-handler");

const asyncHandler = require(expressAsyncHandler)

// @desc    Get projects
// @route   GET /api/projects
// @access  Private       
const getProjects = asyncHandler(async (req, res) => {
    res.status(200).json({message:'GET All projects'});
})

// @desc    Create project
// @route   POST /api/projects
// @access  Private       
const createProject = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text filed')
    }
    
    res.status(200).json({message:'Create a new project'});
})

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private       
const updateProject = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Update project ${req.params.id}`});
})

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private       
const deleteProject = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Delete project ${req.params.id}`});
})

module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject
}
