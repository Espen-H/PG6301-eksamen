const Users = require('../../../src/server/db/users')


test("test user map", () => {
    const users = Users.getAllUsers()
    expect(() => users.toBeDefined());
    expect(() => users.length.toBe(3));
})

test("test get methods", () => {
    expect(() => Users.getUser("notAUser").toBe(false));
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
    expect(() => user.loc.toBe("new loc"))
})