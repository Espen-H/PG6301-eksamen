const express = require('express');
const Users = require('../db/users');
const router = express.Router();


router.get('/timeline', function (req, res) {

    if (!req.user) {
        res.status(401).send();
        return;
    }




    res.status(200).json({
            userPosts: req.body.userPosts
        }
    );
});

router.post('/user/:userId/userpost', function (req, res) {

    const created = Users.createUserPost(req.body.userId, req.body.displayName, req.body.post, req.body.time);

    if (!created) {
        res.status(400).send();
        return;
    }

   res.status(201).send()
   return;
})

router.put('/user/:userId/update', function (req, res) {


})



module.exports = router;