import ProductModel from '../models/ProductModel'

const getProducts = async (req, res) => {
    const {priceRange, category} = req.params;
    const {minPrice, maxPrice} = priceRange;
    try {
        const products = await ProductModel.findAll({
          where: {
            preco: {
              [Op.between]: [minPrice, maxPrice],
            },
            categoria: category,
          },
        });
    
        return products;
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return { error: "Erro ao buscar produtos na faixa de preço e categoria especificada" };
      }
}

const getProductById = async (req, res) => {

}

const getProductViewById = async (req, res) =>{

}

export default {getProducts, getProductById}