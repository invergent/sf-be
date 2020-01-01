import models from '../database/models';

const { User } = models;

export default class UserService {
  static createCustomer(phone) {
    const data = { phone };

    return User.findOrCreate({
      where: data,
      defaults: data
    });
  }

  static createEmployee(user) {
    return User.findOrCreate({
      where: { emailAddress: user.emailAddress },
      defaults: user
    });
  }

  static fetchAdmins() {
    return User.findAll({ where: { roleId: 1 }, raw: true });
  }
}
