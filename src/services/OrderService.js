import models from '../database/models';

const { Order, OrderItem } = models;

export default class OrderService {
  static createOrder(userId) {
    return Order.create({ customerId: userId });
  }

  static createOrderItems(orderItems) {
    return OrderItem.bulkCreate(orderItems);
  }

  static async getNewOrderDetails(orderId) {
    const orderItems = await OrderItem.findAll({
      where: { orderId },
      include: ['service']
    });
    return orderItems.map(item => item.service.name);
  }
}
