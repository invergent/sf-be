import UserService from './UserService';
import OrderService from './OrderService';
import utility from '../utility';

const { mailer, emailFormatter } = utility;

export default class EmailService {
  static async sendNewOrderEmail(customer, order) {
    const requestedServices = await OrderService.getNewOrderDetails(order.id);
    const recipients = await UserService.fetchAdmins();
    const emails = emailFormatter.createNewOrderEmail(customer, requestedServices, recipients);
    return mailer.sender(emails);
  }
}
