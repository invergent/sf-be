import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import dbConfig from '../config/config.json';

dotenv.config();

const db = {};
const basename = path.basename(module.filename);
const connectionConfig = dbConfig[process.env.NODE_ENV];
const { database, username, password } = connectionConfig;

const sequelize = new Sequelize(database, username, password, connectionConfig);

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0)
    && (file !== basename)
    && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
