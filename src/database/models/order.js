const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, { freezeTableName: true });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { as: 'customer', foreignKey: 'customerId' });
    Order.hasMany(models.OrderItem, { as: 'orderItem', foreignKey: 'orderId' });
  };

  return Order;
};

export default order;
