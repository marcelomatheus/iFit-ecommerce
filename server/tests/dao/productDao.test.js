const iconv = require('iconv-lite');
const encodings = require('iconv-lite/encodings');
iconv.encodings = encodings;
const productDao = require('../../dao/productDao')

test('product consult', async () => {
    const result = await productDao.findAll();
    console.log(result)
    expect(result).toBe('connected');
  });   