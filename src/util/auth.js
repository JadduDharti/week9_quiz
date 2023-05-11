const jwt = require('jsonwebtoken')

const createJWT = (user) => {
    console.log(user)
    try {
        return jwt.sign({ user }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRY
        })
    } catch (error) {
        console.error(error)
        return null
    }
}

module.exports = { createJWT }