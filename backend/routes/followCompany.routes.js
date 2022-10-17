const {Router} = require('express');
const {  followCompany } = require('../controllers/followCompany.controller');
const router = Router();

router.get('/', followCompany);

module.exports = router;