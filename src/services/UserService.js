import models from '../database/models';

const { User } = models;

export default class UserService {
  static findOrCreate(phone) {
    const data = { phone };

    return User.findOrCreate({
      where: data,
      defaults: data
    });
  }
}
