const service = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { freezeTableName: true });

  Service.associate = (models) => {
    Service.hasMany(models.OrderItem, { as: 'orderings', foreignKey: 'serviceId' });
  };
  
  return Service;
};

export default service;
