import { Sequelize } from "sequelize";

const db = new Sequelize('bd_challenge','root','',{
    host: 'localhost',
    dialect: "mysql"
});
export default db;