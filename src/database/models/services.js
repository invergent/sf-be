const services = (sequelize, DataTypes) => {
  const Services = sequelize.define('Services', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Services.associate = (models) => {
    Services.hasMany(models.CustomerRequests, { as: 'requests', foreignKey: 'serviceId' });
  };
  
  return Services;
};

export default services;
