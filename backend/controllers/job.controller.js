const jobModel = require('../models/job.model');


const getAlljobs = async (req, res) => {
    const jobs = await jobModel.find();
    res.json(jobs);
}

const getJob = async (req, res) => {
    const {id} = req.params;
    const job = await jobModel.find({id});
    res.json(job);
}

// const addJob = async(req,res) =>{
//     const {id , text , title} = req.params;
//     const job = await jobModel.insert({id,text,title});
//     res.json(job);
// }


const addJob = async (req, res)=>{
    jobModel.create(req.body)
    .then((job)=>res.send(job))
    .catch(err=>res.status(400).send('Error'))
}

module.exports = {
    getAlljobs,
    getJob,
    addJob
}