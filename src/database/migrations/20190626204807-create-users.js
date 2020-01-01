module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    emailAddress: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING
    },
    imageUrl: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    roleId: {
      type: Sequelize.INTEGER,
      onDelete: 'SET NULL',
      references: {
        model: 'Roles',
        key: 'id',
        as: 'role'
      }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, { freezeTableName: true }),
  down: queryInterface => queryInterface.dropTable('Users')
};
