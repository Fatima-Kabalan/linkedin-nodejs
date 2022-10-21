const followCompanyModel = require('../models/followCompany.model');
const User = require('../models/user.model');


const followCompany = async (req, res) => {
   const {company_id} = req.body;
   const follow = new followCompanyModel();
   follow.company_id = company_id;
   follow.user = req.user;
   await follow.save();    
   res.json(follow);
}

module.exports = {
   followCompany
}