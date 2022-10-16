
const userModel = require('../models/user.model');

const createUser = async (req, res)=>{
    userModel.create(req.body)
    .then((user)=>res.send(user))
    .catch(err=>res.status(400).send('Error'))
}

const getAllUsers = async (req, res) => {
    const users = await userModel.find();
    res.send(users)
}

const updateUser = async (req, res) => {
    const {id, ...data} = req.body
    userModel.findByIdAndUpdate(id,{
        name: data.namee,
        email: data.emaill,
        gender: data.genderr
    })
    .then((user)=>res.send(user))
    .catch((err)=>res.status(400).send(err))
}

const deleteUser = async (req, res) => {
    const {id} = req.body
   userModel.findByIdAndRemove(id)
   .then((user)=>res.send(user));
}

const getUser = async(req,res) => {
    const {id} = req.params;
    userModel.find({id}).populate('Post').then((user)=>res.send(user))
}


module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
}

