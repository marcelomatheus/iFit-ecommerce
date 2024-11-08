const ShoppingCart = require('../models/ShoppingCartModel')
const shoppingCartDao = {
    insert: async (username, password) => {  
        const user = new ShoppingCart({ username, password });
        const savedShoppingCart = await user.save()
        return savedShoppingCart;
    },
    findAll: async () => {
        return await ShoppingCart.findAll();
    },
    findById: async (id) => {
        return await ShoppingCart.findByPk(id);
    },
    findShoppingCart: async(username) =>{
        return await ShoppingCart.findOne(username);
    },
    update: async (id, newShoppingCartname, newPassword) => {
        const user = await ShoppingCart.findByPk(id);
        if (user) {
            user.username = newShoppingCartname || user.username;
            user.password = newPassword || user.password;
            await user.save();
            return user;
        }
        return null;
    },
    remove: async (id) => {
        const user = await ShoppingCart.findByPk(id);
        if (user) {
            await user.destroy();
            return user;
        }
        return null;
    }
};

module.exports = shoppingCartDao;