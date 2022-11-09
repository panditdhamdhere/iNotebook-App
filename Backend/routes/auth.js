const express = require('express');
const router = express.Router();
const user = require ('../models/User');


// Create a user using: POSt "/api/auth". doesnt require auth
router.get('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);
})

module.exports = router