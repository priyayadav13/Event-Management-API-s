const Sequelize = require('sequelize');
require('dotenv').config();
const db = {};

const sequelize = new Sequelize(
  String(process.env.DB),
  String(process.env.DB_USER),
  String(process.env.DB_PASSWORD),
  {
    host: String(process.env.HOST),
    dialect: 'postgres',
  }
);
sequelize
.authenticate()
.then(()=>{
  console.log("Databse connected")
})
.catch((error)=>{
  console.log("error".error)
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./User.js")(sequelize, Sequelize);
db.event = require("./Event.js")(sequelize, Sequelize);

db.user.belongsToMany(db.event,{through:'invitee'})
db.event.belongsToMany(db.user,{through:'invitee'})
// drop the table if it already exists
db.sequelize.sync({ logging: false }).then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = db;



