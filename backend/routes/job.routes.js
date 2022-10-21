const {Router} = require('express');
const { getJob, getAllJobs, addJob, updateJob, deleteJob } = require('../controllers/job.controller');
const router = Router();

router.get('/', getAllJobs);
router.get('/:id', getJob);
router.post('/', addJob);
router.put('/', updateJob);
router.delete('/', deleteJob);

module.exports = router;
