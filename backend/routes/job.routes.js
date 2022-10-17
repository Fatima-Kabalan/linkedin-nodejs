const {Router} = require('express');
const { getJob, getAllJobs, createJob, updateJob, deleteJob } = require('../controllers/job.controller');
const router = Router();

router.get('/', getAllJobs);
router.get('/:id', getJob);
router.Job('/', createJob);
router.put('/', updateJob);
router.delete('/', deleteJob);

module.exports = router;