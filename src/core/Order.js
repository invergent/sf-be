import services from '../services';
import utility from '../utility';

const { OrderService, UserService } = services;
const { types: { responseTypes }, ErrorHandler } = utility;

export default class Order {
  static async create(customerOrder) {
    const { items, phone } = customerOrder;

    try {
      const [customer] = await UserService.findOrCreate(phone);
      const order = await OrderService.createOrder(customer.id);
      const itemsOfOrder = Order.transformOrderItems(items, order.id);
      const orderItems = await OrderService.createOrderItems(itemsOfOrder);
      return [responseTypes.success, { customer, orderItems }];
    } catch (error) {
      return ErrorHandler.handle(error);
    }
  }

  static transformOrderItems(orderItems, orderId) {
    return orderItems.map(item => ({ serviceId: item, orderId }));
  }
}
