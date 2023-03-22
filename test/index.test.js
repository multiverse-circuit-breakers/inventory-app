// const { sequelize } = require("../server/db.js");
const { db, Item } = require("../server/models/index.js");

describe("Item Model Tests", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  test("can create Item", async () => {
    const createItem = await Item.create({
      title: "White T-shirt",
      description: "plain white t-shirt",
      price: "23",
      category: "mens",
      image: "someIMG.com",
    });

    expect(createItem.title).toBe("White T-shirt");
  });
});
