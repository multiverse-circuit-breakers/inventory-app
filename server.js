const { db } = require("./server/models");
const app = require("./server/app");
const {sequelize} = require('./server/db');

const PORT = process.env.PORT || 1200;
//
const init = async () => {
  try {
   await db.sync();
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();
