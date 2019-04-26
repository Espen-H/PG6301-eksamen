const Users = require('../../../src/server/db/users')


test("test user map", () => {
    const users = Users.getAllUsers()
    expect(() => users.toBeDefined());
    expect(() => users.length.toBe(3));
})

test("test get methods", () => {
    expect(() => Users.getUser("notAUser").toBeDefined(false));
    expect(() => Users.getUser("Foo").toBeDefined());
    expect(() => Users.getAllUsers().toBeDefined());
    expect(() => Users.getUserPosts("Foo")[0].toBeDefined());
    expect(() => Users.getUserPosts("notAUser").toThrow());
})

test("test post methods", () => {
    Users.createUser("Test", "123", "name", "bday", "location");
    let user = Users.getUser("Test")
    expect(() => user.toBe(true))
    Users.createUserPost("Test", "name", "Here is the post", Date.now())
    expect(() => JSON.parse(Users.getUserPosts(user.userId)).toBe(1))
    Users.updateUser(user, "New Name", "123", "new Loc")
    expect(() => user.displayName.toBe("New Name"))
    expect(() => user.birthday.toBe("123"))
    expect(() => user.location.toBe("new loc"))
})

test("test delete method", () => {
    Users.createUser("Test21", "123", "name", "bday", "location");
    expect(() => Users.getUser("Test21")).toBeDefined();
    Users.createUserPost("Test21", "name", "here is the boom", Date.now());
    expect(() => Users.getUserPost("Test21", 0).toBeDefined());
    Users.deleteUserPost("Test21", 0);
    expect(() => Users.getUserPost("Test21", 0).toBeDefined(false));
    expect(() => user.postCount.toBe(0));
})