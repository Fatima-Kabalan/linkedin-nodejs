const {Router} = require('express');
const { getJob, getAlljobs ,addJob} = require('../controllers/job.controller');
const router = Router();

router.get('/', getAlljobs);
router.get('/:id', getJob);
router.post('/', addJob);

module.exports = router;
