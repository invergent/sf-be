import core from '../core';
// import notify from '../events';
import utility from '../utility';

const { Order } = core;
const { Respond } = utility;

export default class Controller {
  static async createOrder(req, res) {
    const [status, data] = await Order.create(req.body);
    // if (status === responseTypes.success)
    // notify.emit(actionTypes.emailVerification, [data.user]);
    return Respond.send(res, status, data);
  }
}
