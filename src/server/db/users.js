const users = new Map([
    ["Foo", {
        userId: "Foo",
        password: "bar",
        displayName: "Plaintext",
        birthday: "01.01.93",
        location: "Callback hell",
        friends: [],
        userPosts: [{
            id: 0,
            author: "Foo",
            post: "I want snacks",
            time: "Wed Apr 24 2019 14:15:02 GMT+0200 (sentraleuropeisk sommertid)"

        }]
    }],
    ["Bar", {
        userId: "Bar",
        password: "foo",
        displayName: "hunter21",
        birthday: "01.01.93",
        location: "placeholder",
        friends: [],
        userPosts: [{
            id: 1,
            author: "hunter21",
            post: "I just bought snacks",
            time: "Wed Apr 24 2019 09:12:32 GMT+0200 (sentraleuropeisk sommertid)"
        }]
    }],
    ["Idtent", {
        userId: "Idtent",
        password: "password",
        displayName: "displayName",
        birthday: "12.12.1912",
        location: "127.0.0.1",
        friends: [],
        userPosts: [{
            id: 2,
            author: "displayName",
            post: "Have you ever wondered if we're real or just bits in somethings memory?",
            time: "Wed Apr 24 2019 11:04:43 GMT+0200 (sentraleuropeisk sommertid)"
        }]
    }],
    ["forohfor", {
        userId: "forohfor",
        password: "notfound",
        displayName: "gonewiththewind",
        birthday: "4.04.not found",
        location: "",
        friends: [],
        userPosts: []
    }]
]);
const postCount = 3;


function getUser(userId) {
    if (users.get(userId) == undefined) {
        return undefined
    }
    return users.get(userId)
}

function getAllUsers() {
    let result = [];
    users.forEach(user => {
        result.push({
            userId: user.userId,
            displayName: user.displayName,
            birthday: user.birthday,
            location: user.location
        })
    })

    return JSON.stringify([...result]).replace(/\\/g, "")
}

function getUserPosts(user) {
    if (user == undefined || user == null) {
        throw ("Something went wrong trying to  get userPosts")
    }

    let result = [];
    user.userPosts.forEach(post => {
        result.push({
            id: post.id,
            author: post.author,
            post: post.post,
            time: post.time
        })
    })

    return JSON.stringify([...result])
}

function verifyUser(userId, password) {

    const user = getUser(userId);

    if (user === undefined) {
        return false;
    }

    return user.password === password;
}

function createUser(userId, password, displayName, birthday, location) {

    if (getUser(userId) !== undefined) {
        return false;
    }
    // This is a shitshow of userinputs
    const user = {
        userId: userId,
        password: password,
        displayName: displayName,
        birthday: birthday,
        location: location,
        friends: [],
        userPosts: []
    };
    users.set(userId, user)
    if (getUser(userId)) {
        return true;
    }
}

function createUserPost(userId, author, post, time) {

    const userPost = {
        id: postCount,
        author: author,
        post: post,
        time: time
    }

    if (getUser(userId) == undefined) {
    } else {
        getUser(userId).userPosts.push(userPost)
    }
}


function updateUser(userId, newDisplayName, newBirthday, newLocation) {
    let update = getUser(userId)
    if (update !== null && update !== undefined) {
        update.displayName = newDisplayName
        update.birthday = newBirthday
        update.location = newLocation
        return true;
    }


}

function resetAllUsers() {
    users.clear();
}




module.exports = { users, getUser, verifyUser, createUser, resetAllUsers, createUserPost, updateUser, getUserPosts, getAllUsers };
