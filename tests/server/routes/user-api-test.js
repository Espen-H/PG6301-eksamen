const request = require('supertest');
const { app } = require('../../../src/server/app');


test("Test fail login", async () => {

    const response = await request(app)
        .post('/api/user/login')
        .send({ userId: 'notAUser', password: "fakepass" })
        .set('Content-Type', 'application/json');

    expect(response.statusCode).toBe(401);
});


test("Test create account", async () => {
    const response = await request(app)
        .post('/api/user/signup')
        .send({ userId: "Test", password: test, displayName: "test" })
})

test("Test login successful", async () => {
    const response = await request(app)
        .post('/api/user/login')
        .send({ userId: 'Foo', password: "bar" })
        .set('Content-Type', 'application/json');

    expect(response.statusCode).toBe(204);
})


test("Test fail access data of non-existent user", async () => {

    const response = await request(app)
        .get('/api/user/notAUser');

    expect(response.statusCode).toBe(400);
});

test("Test access data of existent user", async () => {

    const response = await request(app)
        .get('/api/user/Foo');

    expect(response.statusCode).toBe(200);
})

test("Test create userPost", async () => {

    const response = await request(app)
        .post('/api/user/Foo/userpost')
        .send({ userId: "Foo", displayName: "Test", post: "Testing", time: "1212" })
    expect(response.statusCode).toBe(201);

});

test("Test get specific userpost", async () => {

    const response = await request(app)
        .get('/api/Foo/post/0')
    expect(response.statusCode).toBe(200);

})

test("Test delete userPost", async () => {

    const response = await request(app)
        .delete('/api/user/Foo/post/0')
    expect(response.statusCode).toBe(204)
})

test("Test change userInfo", async () => {
    const response = await request(app)
        .put('/api/user/Foo/update')
        .send({ userId: "Foo", displayName: "New", birthday: "1", location: "2" })
    expect(response.statusCode).toBe(200)
})