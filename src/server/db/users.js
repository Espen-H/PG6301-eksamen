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

function getAllUsers(){
    return users
}

function getUserPosts(user){
    return user.userPosts;
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
 // This is a shitshow of userinputs
    const user = {
        id: id,
        password: password,
        displayName: displayName,
        birthday: birthday,
        location: location,
        friends: [],
        userPosts: []
    };
    users.set(id, user)
    console.log("Here comes the user")
    console.log(getUser)
    if(getUser(id)) {
        return true;
    }
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


function updateUser(user, newDisplayName, newBirthday, newLocation){

let update = user;
if(user !== null && user !== undefined){
    update.displayName  = newDisplayName
    update.birthday = newBirthday
    update.location = newLocation
    return update;
}


}

function resetAllUsers() {
    users.clear();
}




module.exports = {users, getUser, verifyUser, createUser, resetAllUsers, createUserPost, updateUser, getUserPosts, getAllUsers };
