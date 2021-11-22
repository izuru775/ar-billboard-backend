const Services = require('../services/index');

const createProject = (req,res)=>{
    const obj ={
            name: "Location 1",
            lat: "-37.80625873487332",
            lng: "144.9592512868676",
            billboard: "public/images/..."
    }
    Services.projectService.inserProject(req,res,obj)
}

module.exports ={
    createProject
}