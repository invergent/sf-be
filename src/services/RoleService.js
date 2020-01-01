import models from '../database/models';

const { Role } = models;

export default class RoleService {
  static create(data) {
    return Role.findOrCreate({ where: data, defaults: data });
  }
}
