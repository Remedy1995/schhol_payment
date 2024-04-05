const express=require('express');
const router=express.Router();
const cors=require('cors');
const verify=require('../middleware/auth')
const payment = require('../controllers/Payments')
const bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());
router.use(cors());
router.post('/payment',payment.Payment);
router.post('verifyPayment',payment.PaymentInformation);

module.exports=router;