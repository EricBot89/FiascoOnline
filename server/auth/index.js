const router = require('express').Router()

router.post('./', (req, res ,next) => {
    res.status(200).send('this will handle signup -- change status code')
})

router.put('./', (req,res,next) => {
    res.status(200).send('handle user login here -- change status code')
})

// consider Oauth