const express = require('express');
const Users = require('../db/users');

const router = express.Router();

router.post('/user/signup', function (req, res) {
    const createdUser = Users.createUser(req.body.userId, req.body.password, req.body.displayName, req.body.birthday, req.body.location)

    if (!createdUser) {
        res.sendStatus(400)
    }
    res.sendStatus(201)
})

router.post('/user/login', function (req, res) {
    const verified = Users.verifyUser(req.body.userId, req.body.password);
    if (!verified) {
        res.sendStatus(401)
    } else {
        
        res.status(204).send(Users.getUser(req.body.userId))

    }
})

router.get('/user/:userId', function (req, res) {
    const exist = Users.getUser(req.params.userId)
    { exist !==undefined ?(
        res.status(200).json({exist})
    ) : (
        res.sendStatus(401)
    )   }
   
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

    const created = Users.createUserPost(req.body.userId, req.body.displayName, req.body.post, req.body.time);

    if (!created) {
        res.status(400).send();
        return;
    }

    res.status(201).send()
})

router.get('/user/:userId/userposts', function (req, res) {
    res.send(req.body.userId)
    userPosts = Users.getUserPosts(Users.getUser(req.body.userId))
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
    const updatedUser = Users.updateUser(req.body.userId, req.body.displayName, req.body.birthday, req.body.location)
    res.send(204)
})



module.exports = router;