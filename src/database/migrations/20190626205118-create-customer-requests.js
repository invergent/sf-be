module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('CustomerRequests', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    serviceId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Services',
        key: 'id',
        as: 'service'
      }
    },
    customerId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'customer'
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
  down: queryInterface => queryInterface.dropTable('CustomerRequests')
};
