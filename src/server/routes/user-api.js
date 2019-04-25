const express = require('express');
const Users = require('../db/users');

const router = express.Router();

router.post('/user/signup', function (req, res) {
    const createdUser = Users.createUser(req.params.userId, req.params.password, req.params.displayName, req.params.birthday, req.params.location)

    if (!createdUser) {
        res.sendStatus(400)
    }
    res.sendStatus(201)
})

router.post('/user/login', function (req, res) {
    const verified = Users.verifyUser(req.params.userId, req.params.password);
    if (!verified) {
        res.sendStatus(401)
    } else {
        
        res.status(204).send(Users.getUser(req.params.userId))

    }
})

router.get('/user/:userId', function (req, res) {
    if (Users.getUser(req.params.userId) == undefined) {
        res.sendStatus(401)
        return
    }
    res.status(200).json({
        id: req.params.userId, displayName: req.params.displayName, birthday: req.params.birthday,
        location: req.params.location, friends: req.params.friends, userPosts: req.params.userPosts
    }).replace(/\\/g, "")
})

router.get('/user/timeline', function (req, res) {

    const users = Users.getAllUsers();
    let timeline = [];
    users.forEach(user => {
        let posts = getUserPosts(user)
        timeline.push(posts)
    });

    res.status(201).send().json({ timeline: timeline })
});


router.post('/user/:userId/userpost', function (req, res) {

    const created = Users.createUserPost(req.params.userId, req.params.displayName, req.params.post, req.params.time);

    if (!created) {
        res.status(400).send();
        return;
    }

    res.status(201).send()
})

router.get('/user/:userId/userposts', function (req, res) {
    userPosts = Users.getUserPosts(Users.getUser(req.params.userId))
    res.status(200).json({ userPosts: userPosts })
})

router.get('/users', function (req, res) {
    userbase = Users.getAllUsers()
    res.status(200).json({ userbase: userbase })
})

router.put('/user/:userId/update', function (req, res) {
    if (Users.getUser(req.body.userId) == undefined) {
        res.status(400).send()
        return;
    }
    const updatedUser = Users.updateUser(req.params.userId, req.params.displayName, req.params.birthday, req.params.location)
    res.send(204)
})



module.exports = router;