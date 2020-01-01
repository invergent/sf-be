import supertest from 'supertest';
import http from 'http';
import app from '../../app';

describe('INIT tests', () => {
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
  
  describe('Test', () => {
    it('should report project is live', async () => {
      const response = await request.get('/');

      expect(response.status).toBe(200);
      expect(response.body.message).toEqual('Project started');
    });

    it('should confirm routing is okay', async () => {
      const response = await request.get('/test');

      expect(response.status).toBe(200);
      expect(response.body.message).toEqual('my message');
    });
  });
});
