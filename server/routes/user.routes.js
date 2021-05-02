module.exports = (app) => {
    const users = require('../controllers/userController')
    app.post('/register', users.create)
}