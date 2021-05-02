const User = require('../Models/user');

exports.create = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: 'form cannot be empty'
        })
    }
    const user = new User(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            password: req.body.password
        }
    )
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "there is error registering the user"
            });
        });
}