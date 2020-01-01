const users = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
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
  });

  Users.associate = (models) => {
    Users.hasMany(models.CustomerRequests, { as: 'orders', foreignKey: 'UsersId' });
    Users.belongsTo(models.Roles, { as: 'role', foreignKey: 'roleId' });
  };

  return Users;
};

export default users;
