const express = require('express');
const router = express.Router();


// Create a user using: POSt "/api/auth". doesnt require auth
router.get('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

module.exports = router