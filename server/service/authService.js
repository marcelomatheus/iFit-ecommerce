function testRunning (name){
    return `${name} test success`
}
const authService = {
    insert: async (username, password) => {
        return await User.create({ username, password });
    },
    findAll: async () => {
        return await User.findAll();
    },
    findById: async (id) => {
        return await User.findByPk(id);
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

module.exports = authService;