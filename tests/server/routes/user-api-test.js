const request = require('supertest');
const { app } = require('../../../src/server/app');


test("Test fail login", async () => {

    const response = await request(app)
        .post('/api/user/login')
        .send({ userId: 'notAUser', password: "fakepass" })
        .set('Content-Type', 'application/json');

    expect(response.statusCode).toBe(401);
});

test("create user and login successful", async () => {
    const response = await request(app)
        .post('/api/user/login')
        .send({userId: 'Foo', password: "bar"})
        .set('Content-Type', 'application/json');

        expect(response.statusCode).toBe(200);
        })


    test("Test fail access data of non-existent user", async () => {

        const response = await request(app)
            .get('/api/user/notAUser');

        expect(response.statusCode).toBe(401);
    });

    test("Test access data of existent user", async () => {

        const response = await request(app)
            .get('/api/user/Foo');

        expect(response.statusCode).toBe(200);
    })
