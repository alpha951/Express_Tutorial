const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'john') {
        req.user = { name: 'john', id: 3 }
    }
    else {
        res.send('Unauthorized')
    }
}

module.exports = authorize;