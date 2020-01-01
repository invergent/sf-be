const roles = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Roles.associate = (models) => {
    Roles.hasMany(models.User, { as: 'roleUsers', foreignKey: 'roleId' });
  };
  
  return Roles;
};

export default roles;
