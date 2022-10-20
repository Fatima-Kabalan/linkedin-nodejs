const userModel = require('../models/user.model');

const getAllUsers = async (req, res) => {
    userModel.find({user_type: "user"}).then((users)=> res.send(users))
}

const getAllCompanies = async (req, res) => {
    userModel.find({user_type: "company"}).then((users)=> res.send(users))
}

const updateUser = async (req, res) => {
    const {id, ...data} = req.body
    userModel.findByIdAndUpdate(id,{
        name: data.name,
        profile_photo: data.profile_photo,
        password:data.password
    })
    .then((user)=>res.json(user))
    .catch((err)=>res.status(400).send(err))
}

const getUser = async(req,res) => {
    const {id} = req.params;
    userModel.findOne({id : id}).then((user)=>res.send(user))
}


module.exports = {
    updateUser,
    getUser,
    getAllUsers,
    getAllCompanies
}

