import { config } from 'dotenv';
import bcrypt from 'bcrypt';
import services from '../services';

config();

const { RoleService, UserService } = services;

export default class UserManagement {
  static async createRolesAndSuperAdmin() {
    await RoleService.create({ name: 'Super Admin' });
    await UserService.createEmployee({
      firstname: 'Adenrewaju',
      lastname: 'Okupe',
      emailAddress: process.env.ADMINEMAIL,
      password: bcrypt.hashSync(process.env.ADMINPASSWORD, 10),
      roleId: 1
    });
  }
}
