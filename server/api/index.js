const router = require('express').Router()

router.get('/', (req,res,next) => {
    res.status(200).send({
        "api": "Root -- index",
        "api/users": "user stem"
    })
})

module.exports = router 