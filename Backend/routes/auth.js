const express = require('express');
const router = express.Router();
const user = require('../models/User');
const { body, validationResult } = require('express-validator');


// Create a user using: POSt "/api/auth". doesnt require auth
router.post('/', [
    body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must be Atleast 5 Characters').isLength({ min: 5 }),
], (res, req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user));
})

module.exports = router