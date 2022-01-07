const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/auth.controller');

router.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept'
    );
    next();
});

router.post('/', authCtrl.logIn);

module.exports = router;