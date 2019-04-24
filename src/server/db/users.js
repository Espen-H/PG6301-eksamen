const users = new Map([
    ["Foo", {
        id: "Foo",
        password: "bar",
        displayName: "Plaintext",
        birthday: "01.01.93",
        location: "Callback hell",
        friends: [],
        userPosts: [{
            id: "Foo",
            author: "Foo",
            post: "I want snacks",
            time: "Wed Apr 24 2019 14:15:02 GMT+0200 (sentraleuropeisk sommertid)"

        }]
    }],
    ["Bar", {
        id: "Bar",
        password: "foo",
        displayName: "hunter21",
        birthday: "01.01.93",
        location: "placeholder",
        friends: [],
        userPosts: [{
            id: "Bar",
            author: "hunter21",
            post: "I just bought snacks",
            time: "Wed Apr 24 2019 09:12:32 GMT+0200 (sentraleuropeisk sommertid)"
        }]
    }],
    ["Idtent", {
        id: "Idtent",
        password: "password",
        displayName: "displayName",
        birthday: "12.12.1912",
        location: "127.0.0.1",
        friends: [],
        userPosts: [{
            id: "Idtent",
            author: "displayName",
            post: "Have you ever wondered if we're real or just bits in somethings memory?",
            time: "Wed Apr 24 2019 11:04:43 GMT+0200 (sentraleuropeisk sommertid)"
        }]
    }],
    ["forohfor", {
        id: "forohfor",
        password: "notfound",
        displayName: "gonewiththewind",
        birthday: "4.04.not found",
        location: "",
        friends: [],
        userPosts: []
    }]
]);


function getUser(id) {

    return users.get(id);
}

function verifyUser(id, password) {

    const user = getUser(id);

    if (user === undefined) {
        return false;
    }

    return user.password === password;
}

function createUser(id, password, displayName, birthday, location) {

    if (getUser(id) !== undefined) {
        return false;
    }



    /*
    this can't end badly with so many unchecked userinputs hahaha... /s
    id - Login id
    UserInfo - object containing the user info
    password - login password
    displayName - Name that is displayed to the public
    Birthday - just a string from user
    Location - users location
    Friends - map of users that have accepted friend requests
    userPosts - map of status updates user have posted
    */

    const user = {
        id: id,
        password: password,
        displayName: displayName,
        birthday: birthday,
        location: location,
        friends: [],
        userPosts: []
    };

    users.set(id, user);
    return true;
}

function createUserPost(id, author, post, time) {
    if(!getUser(id)){
        return false
    }

    const userPost = {
        id: id,
        author: author,
        post: post,
        time: time
    }

    getUser(id).userPosts.add(userPost);
    return true;
}    


function updateUser(userId, newDisplayName, newBirthday, newLocation){

const user = getUser(userId)
if(user !== null && user !== undefined){
    
}


}

function resetAllUsers() {
    users.clear();
}




module.exports = { getUser, verifyUser, createUser, resetAllUsers, createUserPost };
