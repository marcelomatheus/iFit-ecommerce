const Product = require('../models/ProductModel')
const productDao = {
    insert: async (username, password) => {  
        const product = new Product({ username, password });
        const savedProduct = await product.save()
        return savedProduct;
    },
    findAll: async () => {
        try{
        const queryResult = await Product.findAll();
        console.log(queryResult)
        return queryResult
        }catch(err){
            console.log('erro no sequelize', err)
        }
    },
    findById: async (id) => {
        return await Product.findByPk(id);
    },
    findProduct: async(username) =>{
        return await Product.findOne(username);
    },
    update: async (id, newProductname, newPassword) => {
        const product = await Product.findByPk(id);
        if (product) {
            product.username = newProductname || product.username;
            product.password = newPassword || product.password;
            await product.save();
            return product;
        }
        return null;
    },
    remove: async (id) => {
        const product = await Product.findByPk(id);
        if (product) {
            await product.destroy();
            return product;
        }
        return null;
    }
};

module.exports = productDao;