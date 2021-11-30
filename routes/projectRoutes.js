const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/index');


// router.get('/api', (req, res) => {
//     console.log("I'm here")
//     Controllers.projectControllers.createProject(req,res)
// });
router.get('/api/data', (req, res) => {
    console.log("I'm here too")
    Controllers.projectControllers.getProjects(req,res)
});

router.get('/location', (req,res)=>{
    Controllers.projectControllers.viewProjects(req,res)
})

router.post('/location', (req,res)=>{
    Controllers.projectControllers.createProject(req,res)
})

module.exports = router