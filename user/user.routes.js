const {Router} = require('express');
const router = Router();
const user = require('./user.controller'); 
const {validateSignup, validateSignin} = require("./user.validator");
const auth = require('../middleware/auth');

router.post('/signup', validateSignup,user.signup);
router.post('/signin',validateSignin,user.signin);
router.get('/home',() => {console.log('home page')})

module.exports = router;