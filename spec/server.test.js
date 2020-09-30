const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);

describe('Make a request to http://localhost:3002', () => {
  it('Should respond with status 200 to a GET request to /api/restaurants/1', async done => {
    const response = await request.get('/api/restaurants/1');
    expect(response.status).toBe(200);
    done();
  });
});
