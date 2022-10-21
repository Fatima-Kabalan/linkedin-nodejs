const {Router} = require('express');
const { getJob, getAlljobs ,addJob,deleteJob} = require('../controllers/job.controller');
const router = Router();

router.get('/', getAlljobs);
router.get('/:id', getJob);
router.post('/', addJob);
router.delete('/', deleteJob);

module.exports = router;
