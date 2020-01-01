const role = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { freezeTableName: true });

  Role.associate = (models) => {
    Role.hasMany(models.User, { as: 'roleUsers', foreignKey: 'roleId' });
  };
  
  return Role;
};

export default role;
