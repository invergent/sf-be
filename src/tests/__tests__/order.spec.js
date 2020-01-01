import supertest from 'supertest';
import http from 'http';
import app from '../../app';
import services from '../../services';
import commonAssertions from '../utils/commonAssertions';

const { OrderService } = services;
const { badRequest } = commonAssertions;

describe('Order tests', () => {
  let server;
  let request;

  beforeAll(async () => {
    server = http.createServer(app);
    await server.listen(8484);
    request = supertest('http://example.com:8484');
  });

  afterAll(async () => {
    await server.close();
  });
  
  describe('orders', () => {
    it('should report project is live', async () => {
      const response = await request
        .post('/order')
        .send({});

      badRequest(response, 1);
      expect(response.body.errors[0]).toEqual('Empty request');
    });

    it('should fail if fields are missing', async () => {
      const response = await request
        .post('/order')
        .send({ phone: '9084' });

      badRequest(response, 1);
      expect(response.body.errors[0]).toEqual('Missing fields: items');
    });

    it('should fail is request contain errors: one', async () => {
      const response = await request
        .post('/order')
        .send({ phone: '9084', items: 'items' });

      badRequest(response, 2);
      expect(response.body.errors[0]).toEqual('items must be an array of service ids');
      expect(response.body.errors[1]).toEqual('invalid phone number');
    });

    it('should fail is request contain errors: two', async () => {
      const response = await request
        .post('/order')
        .send({ phone: '09098746284', items: [] });

      badRequest(response, 1);
      expect(response.body.errors[0]).toEqual('At least one service is required');
    });

    it('should fail is request contain errors: three', async () => {
      const response = await request
        .post('/order')
        .send({ phone: '09098746284', items: [1, 2, 'three'] });

      badRequest(response, 1);
      expect(response.body.errors[0]).toEqual('items contain non-number elements');
    });

    it('should successfully create order', async () => {
      const response = await request
        .post('/order')
        .send({ phone: '09098746284', items: [1, 2] });
      
      expect(response.body.message).toEqual('success');
      expect(response.body.data.customer).toHaveProperty('id');
      expect(response.body.data.orderItems).toHaveLength(2);
    });

    it('should respond with internal error for unexpected errors', async () => {
      jest.spyOn(OrderService, 'createOrder').mockRejectedValueOnce('Error: some error');
  
      const response = await request
        .post('/order')
        .send({ phone: '09098746284', items: [1, 2] });
      
      expect(response.status).toBe(500);
      expect(response.body.message).toBe('Internal error');
    });
  });
});
