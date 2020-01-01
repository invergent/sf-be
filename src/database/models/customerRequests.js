const customerRequests = (sequelize, DataTypes) => {
  const CustomerRequests = sequelize.define('CustomerRequests', {
    serviceId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  CustomerRequests.associate = (models) => {
    CustomerRequests.belongsTo(models.Services, { as: 'service', foreignKey: 'serviceId' });
    CustomerRequests.belongsTo(models.Customers, { as: 'customer', foreignKey: 'userId' });
  };

  return CustomerRequests;
};

export default customerRequests;
