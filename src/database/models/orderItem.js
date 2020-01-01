const orderItem = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, { freezeTableName: true });

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Order, { as: 'order', foreignKey: 'orderId' });
    OrderItem.belongsTo(models.Service, { as: 'service', foreignKey: 'serviceId' });
  };

  return OrderItem;
};

export default orderItem;
