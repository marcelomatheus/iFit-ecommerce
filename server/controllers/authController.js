const testRunning = require('../service/authService')
const test = async (req,res) => {
    const name = 'Marcelo'
    const response = testRunning(name)
    return res.json(response);
}


module.exports = {test}
 