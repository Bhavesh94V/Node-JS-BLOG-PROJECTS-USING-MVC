const userModel = require('../model/userModel');

const signup = async (req, res) => {

    await userModel.create(req.body);

    res.render('register');
};

const login = async (req, res) => {

    const { username, password } = req.body;

    const user = await userModel.findOne({
        username,
        password
    });

    if (!user) {
        return res.send('User not exists');
    }
    if (!password) {
        return res.send('Password not exists');
    }

    res.cookie('user', user._id.toString()).redirect('/user/dashboard');
};
    
const dashboard = async (req, res) => {

    const userId = req.cookies.user;

    if (!userId) {
        return res.redirect('/user/login');
    }

    const user = await userModel.findById(userId);

    res.render('Dashboard');
};

const logout = (req, res) => {

    res.clearCookie('user');

    res.redirect('/user/login');
    
};

module.exports = { signup, login, dashboard, logout };
