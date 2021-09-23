const { Response, Request } = require('express');

const user = require("../models/User")

class UserController 
{
    async getUser(req, res) {
        //TODO: SERVICE GETUSER
    }

    async createUser(req, res) {
        //TODO: SERVICE GETUSER
    }

    async updateUser(req, res) {
        //TODO: SERVICE GETUSER
    }

    async deleteUser(req, res) {
        //TODO: SERVICE GETUSER
    }
}

module.exports = new UserController();
