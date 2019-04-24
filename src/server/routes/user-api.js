const express = require('express');
const Users = require('../db/users');

const router = express.Router();


router.get('/timeline', function (req, res) {

    if (!req.user) {
        res.status(401).send();
        return;
    }

    Users.forEach(userPost => {
        
    });

});

router.post('/:userId/userpost', function (req, res) {

    const created = Users.createUserPost(req.body.userId, req.body.displayName, req.body.post, req.body.time);

    if (!created) {
        res.status(400).send();
        return;
    }

    res.status(201).send()
})

router.put('/:userId/update', function (req, res) {

    let user = Users.getUser(req.params.userId)

    if (user == null || user == undefined) {
        res.status(400).send()
        return;
    }

    user.displayName = req.body.displayName;
    user.birthday = req.body.birthday;
    user.location = req.body.location;

    res.send(204)
})


module.exports = router;