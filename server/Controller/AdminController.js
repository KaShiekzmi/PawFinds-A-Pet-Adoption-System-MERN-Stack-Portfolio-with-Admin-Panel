const express = require('express')

const getCredentials = (req, res) => {
    const Credentials = { "username": "admin", "password": "123" }
    res.status(200).json(Credentials)
}

module.exports = { getCredentials }