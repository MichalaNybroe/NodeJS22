import { express } from 'express'

const app = express()

app.get('/', checkAuthentication, (req, res, next) => {
    // Logic
})

app.get('/login'), checkGuest, (req, res, next) => {
    // Logic
}

app.post('/login', checkGuest, (req, res, next) => {
    //success, failure + failure flash
})

app.get('/profile', checkGuest, (req, res, next) => {
    //profile page so send username if implemented
})

app.get('/settings', checkAuthentication, checkAdmin, (req, res, next) => {
    //admin page
})






// Middleware
//https://github.com/WebDevSimplified/Nodejs-Passport-Login/blob/master/server.js
function checkAuthentication(req, res, next) {
    if(req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}

function checkGuest(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

function checkAdmin(req, res, next) {
    if (req.user().isAdmin) {
        return next()
    }
    return res.redirect('/')
}




const PORT = process.env.PORT || 8080

app.listen(PORT, (error) => {
    console.log(error)},
    console.log('Server is running on port ', PORT))
