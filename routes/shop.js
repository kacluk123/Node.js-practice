const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

router.post('/', productsController.deleteProduct);

router.get('/cart', productsController.getCart)

router.post('/cart', productsController.cartDataFromUser)
module.exports = router;
