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
    const {title,text} = req.body;
    console.log(req.body)
    const job = await jobModel.create({title,text});
    res.json(job);
}

module.exports = {
    getAlljobs,
    getJob,
    addJob
}