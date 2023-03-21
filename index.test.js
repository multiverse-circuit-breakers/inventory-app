
const {sequelize} = require('server/db.js');
const {Sauce, Item} = require('server/models/index.js');
console.log('sequelize', sequelize)

describe('Sauce and Item Models', () => {

    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })

test('can create Item', async () => {
    const createItem = await Item.create({ name: "White T-shirt" , description: "plain white t-shirt", price: "23", category: "mens", image: "someIMG.com" });

    expect(createItem.name).toBe("White T-shirt");
})

})