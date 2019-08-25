const router = require('express').Router()


router.get('/', (req,res,next) => {
    res.status(200).send('this will send a list of users')
})

router.put('/:id', (req,res,next) => {
   const {id} = req.params
   const {data} = req.body
   res.status(200).send('this will change user data -- update status code')
})

module.exports = router