const jobModel = require('../models/job.model');


const getAlljobs = async (req, res) => {
    const jobs = await jobModel.find();
    res.send(jobs)
}


const getJob = async (req, res) => {
    const {id} = req.params;
    const job = await Model.find({id})
    res.send(job)
}


module.exports = {
    getAlljobs,
    getjob
}