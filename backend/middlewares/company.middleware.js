const companyMiddleware = async (req, res, next) => {
    if(req.user.userType === 'company'){
         next()
    }
     return res.status(401).json({message: "Unauthorized"});
}

module.exports = companyMiddleware;
