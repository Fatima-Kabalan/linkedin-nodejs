const {Router} = require('express');
const { getUser, getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/user.controller');
const router = Router();


router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);



module.exports = router;