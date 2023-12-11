const {Router} = require('express');
const router = Router(); 
const {getProduct} = require('./product.controller');
const auth = require('../middleware/auth');

router.get('/',auth, getProduct)

module.exports = router;