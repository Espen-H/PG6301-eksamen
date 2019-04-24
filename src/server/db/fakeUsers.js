export const fakeUsers = [
    {
        id: "Foo",
        userInfo: {
            password: "bar",
            displayName: "Plaintext",
            birthday: "01.01.93",
            location: "Callback hell",
            friends: [fakeUsers[1]],
            userPosts: [
                {
                    id: fakeUsers[0].id,
                    author: fakeUsers[0].displayName,
                    post: "I want snacks",
                    time: "Wed Apr 24 2019 14:15:02 GMT+0200 (sentraleuropeisk sommertid)"

                }]
        }
    }, {
        id: "Bar",
        userInfo: {
            password: "foo",
            displayName: "hunter21",
            birthday: "01.01.93",
            location: "placeholder",
            friends: [fakeUsers[0]],
            userPosts: [{
                id: fakeUsers[1].id,
                author: fakeUsers[1].displayName,
                post: "I just bought snacks",
                time: "Wed Apr 24 2019 09:12:32 GMT+0200 (sentraleuropeisk sommertid)"
            }]
        }
    }, {
        id: "Idtent",
        userInfo: {
            password: "password",
            displayName: "displayName",
            birthday: "12.12.1912",
            location: "127.0.0.1",
            friends: [],
            userPosts: [{
                id: fakeUsers[2].id,
                author: fakeUsers[2].displayName,
                post: "Have you ever wondered if we're real or just bits in somethings memory?",
                time: "Wed Apr 24 2019 11:04:43 GMT+0200 (sentraleuropeisk sommertid)"
            }]
        }
    }, {
        id: "forohfor",
        userInfo: {
            password: "notfound",
            displayName: "gonewiththewind",
            birthday: "4.04.not found",
            location: "",
            friends: [],
            userPosts: []
        }
    },


]
