const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    emailAddress: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    imageUrl: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    roleId: {
      type: DataTypes.INTEGER
    }
  }, { freezeTableName: true });

  User.associate = (models) => {
    User.hasMany(models.Order, { as: 'orders', foreignKey: 'customerId' });
    User.belongsTo(models.Role, { as: 'role', foreignKey: 'roleId' });
  };

  return User;
};

export default user;
