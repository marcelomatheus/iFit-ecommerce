import WishListModel from '../models/WishListModel.js';
import WishListItemsModel from '../models/WishlistItemsModel.js';

const findWishListByCustomer = async (customerId) => {
    return await WishListModel.findOne({ where: { Cpf_Cliente: customerId } });
};

const createWishList = async (customerId) => {
    return await WishListModel.create({ Cpf_Cliente: customerId });
};

const findWishListItems = async (wishListId) => {
    return await WishListItemsModel.findAll({ where: { Cod_WishList: wishListId } });
};

const addProductToWishList = async (wishListId, productId) => {
    return await WishListItemsModel.create({
        Cod_WishList: wishListId,
        Cod_Produto: productId
    });
};

const removeProductFromWishList = async (wishListId, productId) => {
    return await WishListItemsModel.destroy({
        where: { Cod_WishList: wishListId, Cod_Produto: productId }
    });
};

const updateWishListById = async (wishListId, updateData) => {
    return await WishListModel.update(updateData, {
        where: { Cod_WishList: wishListId }
    });
};

const getWishListByCustomer = async (req, res) => {
    const Cpf_Cliente = req.params.Cpf_Cliente;
    try {
        const wishList = await findWishListByCustomer(Cpf_Cliente);

        if (!wishList) {
            return res.status(404).json({ message: 'Lista de desejos não encontrada' });
        }

        const wishListItems = await findWishListItems(wishList.Cod_WishList);
        return res.json({ wishList, items: wishListItems });

    } catch (error) {
        return res.status(500).json({ error: 'Erro ao obter a lista de desejos', err: error });
    }
};

const insertProductWishList = async (req, res) => {
    const { productId, customerId } = req.body;

    try {
        let wishList = await findWishListByCustomer(customerId);
        
        if (!wishList) {
            wishList = await createWishList(customerId);
        }

        const newWishListItem = await addProductToWishList(wishList.Cod_WishList, productId);
        return res.json(newWishListItem);

    } catch (error) {
        return res.status(500).json({ error: 'Erro ao adicionar o produto na lista de desejos', err: error });
    }
};

const deleteProductWishList = async (req, res) => {
    const { customerId, productId } = req.params;
    
    try {
        const wishList = await findWishListByCustomer(customerId);

        if (!wishList) {
            return res.status(404).json({ error: 'Lista de desejos não encontrada' });
        }

        const result = await removeProductFromWishList(wishList.Cod_WishList, productId);

        if (!result) return res.status(400).json({ error: 'Produto não encontrado na lista de desejos' });

        return res.status(200).json({ message: 'Produto removido da lista de desejos' });

    } catch (error) {
        return res.status(500).json({ error: 'Erro ao remover o produto da lista de desejos', err: error });
    }
};

const updateWishList = async (req, res) => {
    const customerId = req.params.Cpf_Cliente;
    const updateData = req.body;

    try {
        const wishList = await findWishListByCustomer(customerId);

        if (!wishList) {
            return res.status(404).json({ error: 'Lista de desejos não encontrada' });
        }

        const updatedWishList = await updateWishListById(wishList.Cod_WishList, updateData);

        if (!updatedWishList[0]) return res.status(400).json({ error: 'Erro ao atualizar a lista de desejos' });

        return res.status(200).json({ message: 'Lista de desejos atualizada com sucesso' });

    } catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar a lista de desejos', err: error });
    }
};

export { getWishListByCustomer, insertProductWishList, deleteProductWishList, updateWishList };
