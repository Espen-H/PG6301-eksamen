const users = new Map();


function getUser(id){

    return users.get(id);
}

function verifyUser(id, password){

    const user = getUser(id);

    if(user === undefined){
        return false;
    }

    return user.password === password;
}

function createUser(id, password, displayName, birthday, location){

    if(getUser(id) !== undefined ){
        return false;
    }

    /*
    this can't end badly with so many unchecked userinputs hahaha... /s
    @Params
    id - Login id
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
        friends: null,
        userPosts: null,
    };

    users.set(id, user);
    return true;
}

function postUpdate(id, displayName, payload)
{
    post = {
        id: id,
        author: displayName,
        post: payload.body,
        time: new Date()
    }
}

function resetAllUsers(){
    users.clear();
}




module.exports = {getUser, verifyUser, createUser, resetAllUsers, postUpdate};
