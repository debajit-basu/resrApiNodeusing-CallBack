const express = require('express');
const router = express.Router();





router.get('/' , (req,res) => {
    //console.log('rest api page');
    res.send('post route');
})

router.post('/' , (req,res) => {

     console.log(req.body);

})

module.exports = router;
