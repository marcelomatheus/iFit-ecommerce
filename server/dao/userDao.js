const User = require('../models/UserModel')
const userDao = {
    insert: async (username, password) => {  
        const user = new User({ username, password });
        const savedUser = await user.save()
        return savedUser;
    },
    findAll: async () => {
        return await User.findAll();
    },
    findById: async (id) => {
        return await User.findByPk(id);
    },
    findUser: async(username) =>{
        return await User.findOne(username);
    },
    update: async (id, newUsername, newPassword) => {
        const user = await User.findByPk(id);
        if (user) {
            user.username = newUsername || user.username;
            user.password = newPassword || user.password;
            await user.save();
            return user;
        }
        return null;
    },
    remove: async (id) => {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return user;
        }
        return null;
    }
};

module.exports = userDao;