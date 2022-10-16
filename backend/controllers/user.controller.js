const userModel = require('../models/user.model');

const getAllUsers = async (req, res) => {
    const user = req.user;
    res.json({user: user});
}

const getAllCompanies = async (req, res) => {
    userModel.find({user_type: "company"}).then((users)=> res.send(users))
}

const updateUser = async (req, res) => {
    const {id, ...data} = req.body
    userModel.findByIdAndUpdate(id,{
        name: data.name,
        email: data.email,
        
    })
    .then((user)=>res.send(user))
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

