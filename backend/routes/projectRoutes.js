const express = require('express')
const router = express.Router()
const {
    getProjects,
    createProject, 
    updateProject, 
    deleteProject,
} = require('../controllers/projectController') 

const { protect } = require('../middleware/authMiddleware')

/*
router.get('/', getProjects)
router.post('/', createProject)
*/
router.route('/').get(protect, getProjects).post(protect,createProject)

/*
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)
*/
router.route('/:id').put(protect, updateProject).delete(protect, deleteProject)

module.exports = router