const userCtrl = {};

const User = require("../models/user")

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.send(users)
}

userCtrl.createUser = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.send("user Created")
}

userCtrl.updateUser = async (req, res) =>{
    const {username} = req.body;
    await User.findOneAndUpdate(req.params.id, {
        username
    })
    res.send({Message : "User Updated"})
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.send("user Deleted")
}

module.exports = userCtrl