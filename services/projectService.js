const mongoose = require('mongoose');
const Location = require('../models/locationModal');
const Controllers = require('../controllers/index');



const inserProject = (req, res, obj) => {
    const { name, lat, lng, billboard } = obj;
    const newLocation = new Location({
        name,
        lat,
        lng,
        billboard
    })
    newLocation.save()
        .then(location =>{
            if(location){
                res.json({statusCode: 200,message:"Location sucessfully added",data:location})
            }else{
                res.json({statusCode:400, message:"error"})
            }
        })
        .catch(err=> console.log(err))
}

const getAllprojects = (req,res)=>{
    Location.find({})
        .then(result=>{
            if(result){
                res.json({statusCode:200,data:result})
            }else{
                res.json({statusCode:400,message:"Error"})
            }
        })
        .catch(error=>console.log(error))
}
exports.inserProject = inserProject;
exports.getAllprojects = getAllprojects;