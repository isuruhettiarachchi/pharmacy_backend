var express = require('express')
var router = express.Router()

router.get('/' , (req, res) => {
    res.send('Welcome to reports route')
})

module.exports = router;