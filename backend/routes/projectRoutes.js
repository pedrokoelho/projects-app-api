const express = require('express')
const router = express.Router()
const {
    getProjects,
    createProject, 
    updateProject, 
    deleteProject,
} = require('../controllers/projectController') 

/*
router.get('/', getProjects)
router.post('/', createProject)
*/
router.route('/').get(getProjects).post(createProject)

/*
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)
*/
router.route('/:id').put(updateProject).delete(deleteProject)

module.exports = router