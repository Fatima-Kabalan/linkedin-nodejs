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

const addJob = async (req, res) => {
    const {id,title,text} = req.body;
    console.log(req.body)
    const job = await jobModel.create({id,title,text});
    res.json(job);
}


const deleteJob = async (req, res) => {
    const {id} = req.body
    jobModel.findByIdAndRemove(id)
   .then((jobModel)=>res.send(jobModel));
}



module.exports = {
    getAlljobs,
    getJob,
    addJob,
    deleteJob
}