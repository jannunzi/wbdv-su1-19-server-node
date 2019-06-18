let users = [];
module.exports = function (app) {

    const register = user =>
        users.push(user)

    const login = credentials =>
        users.find(user =>
            user.username === credentials.username &&
            user.password === credentials.password
        )

    app.post('/api/register', function (req, res) {
        const user = req.body;
        register(user);
        res.send(user)
    })

    app.post('/api/login', function (req, res) {
        const credentials = req.body;
        const user = login(credentials)
        if (user) {
            res.send(200)
            req.session['currentUser'] = user;
        } else {
            res.send(403)
        }
    })

    app.get('/api/profile', function (req, res) {
        const user = req.session['currentUser']
        if (user) {
            res.send(user)
        } else {
            res.send(403)
        }
    })
}
