
const productRoute = require('../product/product.routes.js');
const userRoute= require('../user/user.routes.js')
const auth = require('../middleware/auth.js');

module.exports = function(app){
    app.use('/user', userRoute)
    app.use('/product', auth, productRoute);
};