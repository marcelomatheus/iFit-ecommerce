const database = require('../../databases/ecommercedb')

test('connection database', async () => {
    const result = await database()
    console.log(result)
    expect(result).toBe('connected');
  });   