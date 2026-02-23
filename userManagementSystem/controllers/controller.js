const UserModel = require('../model/user');

exports.create = async (req, res) => {
    if (!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone) {
        return res.status(400).send({ message: "Content can not be empty!" });
    }

    const user = new UserModel({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });

    try {
        const data = await user.save();
        res.send({ message: "User created successfully!!", user: data });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to update can not be empty!" });
    }

    const id = req.params.id;
    try {
        const data = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!data) return res.status(404).send({ message: "User not found." });
        res.send({ message: "User updated successfully" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.destroy = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await UserModel.findByIdAndDelete(id);
        if (!data) return res.status(404).send({ message: "User not found." });
        res.send({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};