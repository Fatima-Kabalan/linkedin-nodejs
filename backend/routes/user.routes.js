const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { getUser, getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/user.controller');
const router = Router();

// to check the authentication first we added authMiddleware
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);



module.exports = router;