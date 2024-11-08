require('iconv-lite').encodingExists('foo')

const {connection} = require('../../databases/ecommercedb')

test('connection database', async () => {
    const result = await connection()
    console.log(result)
    expect(result).toBe('connected');
  });   