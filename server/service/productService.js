import ProductModel from '../models/ProductModel.js'
import { Op } from 'sequelize';
const getProducts = async (req, res) => {
    const {minPrice, maxPrice, category} = req.params
    try {
        const products = await ProductModel.findAll({
          where: {
            preco: {
              [Op.between]: [minPrice, maxPrice],
            },
            categoria: category,
          },
        });
    
        return res.json(products);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return { error: "Erro ao buscar produtos na faixa de preço e categoria especificada" };
      }
}

const getProductById = async (req, res) => {
    const {productId} = req.params;
    if (!productId) return res.json({ error: '[Params not defined]' });
    try {
        const queryResult = await ProductModel.findOne({ where: { cod_produto: productId } });
        if (!queryResult) return res.json({ error: 'Produto não encontrado' });
        return res.json(queryResult);
    } catch (err) {
        return res.json({ error: '[getProduct error]', details: err });
    }   
}


export {getProducts, getProductById}