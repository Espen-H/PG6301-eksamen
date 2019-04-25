const express = require('express');
const Users = require('../db/users');

const router = express.Router();


router.get('/:userId', function(req, res) {
    user = Users.getUser(req.body.userId)
    res.status(200).json({id: user.userId, displayName: user.displayName, birthday: user.birthday, location: user.location})
})

router.get('/timeline', function (req, res) {

    const users = Users.getAllUsers();
    let timeline = [];
    users.forEach(user => {
        let posts = getUserPosts(user)
        timeline.p
    });

    res.status(201).send().json({timeline});
});


router.post('/:userId/userpost', function (req, res) {

    const created = Users.createUserPost(req.body.userId, req.body.displayName, req.body.post, req.body.time);

    if (!created) {
        res.status(400).send();
        return;
    }

    res.status(201).send().json(timeline)
})

router.put('/:userId/update', function (req, res) {
       let user = Users.getUser(req.params)
    if (user == null || user == undefined) {
        res.status(400).send()
        return;
    }
    const updatedUser = Users.updateUser(user, req.body.displayName, req.body.birthday, req.body.location)
    res.send(204).json({updatedUser})
    })

    

module.exports = router;