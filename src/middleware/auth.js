module.exports= function (req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', 'Unauthorized Access, please Sign-in');
    res.redirect('/signin');
}   