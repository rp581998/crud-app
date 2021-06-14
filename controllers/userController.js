const User = require('../Models/user');

exports.get = (req, res) => {
    res.json({ message: 'Hello from Express from different file'});
}


exports.create = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    if (!req.body) {
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

exports.getProfiles = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const profiles = await User.find({});

    try {
        res.send(profiles);
      } catch (error) {
        response.status(500).send(error);
      }
}


exports.deleteProfile = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const profile = await User.deleteOne({"email":req.body.email});
    const profiles = await User.find({});
    try {
        res.send(profiles);
      } catch (error) {
        response.status(500).send(error);
      }
}

