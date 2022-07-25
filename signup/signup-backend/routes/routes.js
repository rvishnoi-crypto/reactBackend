const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupModel')

router.post('/signup', (request, response) => {
    const signUpUser = new signUpTemplateCopy()

    signUpUser.fullname = request.body.fullname
    signUpUser.username = request.body.username
    signUpUser.email = request.body.email
    signUpUser.password = request.body.password


    signUpUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(err => {
            console.log("dv")
            response.json(err)
        })
})

module.exports = router