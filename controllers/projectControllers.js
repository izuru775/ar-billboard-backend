const Services = require('../services/index');

const createProject = (req,res)=>{
    const obj ={
            name: "Location 4",
            lat: "-37.8502000551176",
            lng: "145.09756638589258",
            billboard: "https://lh5.googleusercontent.com/p/AF1QipOBm5ug0sZvMVEUXfkdnBI6fYIVsLhMNFTwZqIN=w484-h240-k-no"

            // Location 2(deakin) -37.84614523777127, 145.11489061370446
            // Location 3(VicRoads Burwood) -37.855430123671944, 145.1650157338754
            // Location 4(McDonald's Burwood) -37.8502000551176, 145.09756638589258
    }
    Services.projectService.inserProject(req,res,obj)
}
const getProjects = (req,res) =>{
    Services.projectService.getAllprojects(req,res);
}
module.exports ={
    createProject,
    getProjects
}