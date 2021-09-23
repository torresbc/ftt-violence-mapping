const { Router } = require('express');
const app = Router();
const userController = require('../controllers/UserController');

const UserController = userController;

class UserRouter {
    getRoutes() {
        app.get('/', (req, res) => UserController.getUser(req, res));
        app.post('/', (req, res) => UserController.createUser(req, res));
        app.put('/', (req, res) => UserController.updateUser(req, res));
        app.delete('/:id', (req, res) => UserController.deleteUser(req, res));

        return app
    }
}

module.exports = new UserRouter();
