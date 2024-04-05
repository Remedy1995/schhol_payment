
const https=require('https');
require("dotenv").config();

 const verifyPayment = (reference) =>{
    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: `/transaction/verify/:${reference}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_API}`
      }
    }
    
    https.request(options, res => {
      let data = ''
    
      res.on('data', (chunk) => {
        data += chunk
      });
    
      res.on('end', () => {
        return JSON.parse(data);
      })
    }).on('error', error => {
     return error;
    })
    }

    module.exports =verifyPayment;