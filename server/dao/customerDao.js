import ConsumerModel from '../models/ConsumerModel.js'

const consumerDao = {
    findAll: async () => {
        const queryResult = await ConsumerModel.findAll()
        return queryResult;
    }
}

export default consumerDao;