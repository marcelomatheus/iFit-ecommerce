const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, login, register}  = require('../service/authService')


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost'
    })
)

router.get('/',test)
router.post('/login',login)
router.post('/register',register)

module.exports = router;