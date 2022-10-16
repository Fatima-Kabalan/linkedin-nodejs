const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { getUser, getAllUsers, updateUser} = require('../controllers/user.controller');
const companyMiddleware = require('../middlewares/company.middleware');
const router = Router();

// to check the authentication first we added authMiddleware
router.get('/', authMiddleware, getAllUsers);
router.get('/admin', authMiddleware, companyMiddleware, getAllCompanies);
router.get('/:id', getUser);
router.put('/', updateUser);


module.exports = router;