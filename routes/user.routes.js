module.exports = (app) => {
    const users = require('../controllers/userController')
    app.get("/", users.get);
    app.post('/register', users.create);
    app.get("/profiles", users.getProfiles);
    app.put("/delete", users.deleteProfile)
}