const secure_api = (req, res, next) => {
    console.log('ami', req.headers)
    if(req.headers.authorization == 'oeY$M81N0*{K') {
        next()
    }
    else{
        res.status(401)
        res.send({error: "Invalid API"})
    }

    const lovely = ('happy birthday')
    console.log(lovely);
}

module.exports = secure_api;