import core from '../core';
import notify from '../events';
import utility from '../utility';

const { Order, UserManagement } = core;
const { Respond, types: { actionTypes, responseTypes } } = utility;

export default class Controller {
  static async createOrder(req, res) {
    const [status, data] = await Order.create(req.body);
    if (status === responseTypes.success) {
      notify.emit(actionTypes.newOrder, [data.customer.toJSON(), data.order.toJSON()]);
    }
    return Respond.send(res, status, data);
  }

  static async createRolesAndSuperAdmins() {
    return UserManagement.createRolesAndSuperAdmin();
  }
}
