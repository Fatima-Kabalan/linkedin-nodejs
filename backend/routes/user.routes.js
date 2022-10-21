const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { getUser, getAllUsers, getAllCompanies, updateUser} = require('../controllers/user.controller');
const router = Router();

// to check the authentication first we added authMiddleware
router.get('/', authMiddleware, getAllUsers);
router.get('/companies', authMiddleware, getAllCompanies);
router.get('/:id', getUser);
router.put('/', updateUser);


module.exports = router;