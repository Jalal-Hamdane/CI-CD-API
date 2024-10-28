// tests/app.test.js
const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('responds with Hello, DevOps World!', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello, DevOps World!');
        expect(response.statusCode).toBe(200);
    });
});
