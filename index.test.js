const request = require('supertest');
const app = require('./index'); 

describe('POST /add', () => {
  it('should return the sum of two integers', async () => {
    const response = await request(app)
      .post('/add')
      .send({ a: 5, b: 3 });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 8 });
  });
});
