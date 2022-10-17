const followCompanyModel = require('../models/followCompany.model');


const followCompamy = async (req, res) => {
    const follows = await followCompanyModel.find();
    res.json(follows)
}

module.exports = {
   followCompamy
}