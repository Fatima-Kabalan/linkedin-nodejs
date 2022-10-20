const {Router} = require('express');
const { followCompany } = require('../controllers/followCompany.controller');
const router = Router();

router.post('/', followCompany);

module.exports = router;