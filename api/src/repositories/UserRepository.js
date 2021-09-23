var config = require("../dbconfig");

const sql = require("mssql");

const User = require("../models/User")

class UserRepository {
    async getUser(req, res) {
        let conn = await sql.connect(config);
        var users = await conn.request().query("SELECT * FROM USER");

        return users.recordsets;
    }

    async createUser(req, res) {
        try {
            let conn = await sql.connect(config);
            var model = new User(req.body)

            sql.input('ID', sql.Int, model.id);
            sql.input('NAME', sql.VarChar, model.name);
            sql.input('EMAIL', sql.VarChar, model.email);
            sql.input('CONTACT', sql.VarChar, model.contact);
            sql.input('BIRTH_DATE', sql.Date, model.birth_date);

            var users = await conn.request().query("INSERT INTO USER VALUES (@ID, @NAME, @EMAIL, @CONTACT, @BIRTH_DATE)");

            return users.recordsets;
        }
        catch (error) {
            console.log()
        }
    }

    async updateUser(req, res) {
        try {
            let conn = await sql.connect(config);
            var model = new User(req.body)

            sql.input('ID', sql.Int, model.id);
            sql.input('NAME', sql.VarChar, model.name);
            sql.input('EMAIL', sql.VarChar, model.email);
            sql.input('CONTACT', sql.VarChar, model.contact);
            sql.input('BIRTH_DATE', sql.Date, model.birth_date);

            var users = await conn.request().query("UPDATE USER SET ID = @ID, NAME = @NAME, EMAIL = @EMAIL, CONTACT = @CONTACT, BIRTH_DATE = @BIRTH_DATE WHERE ID = @ID");

            return users.recordsets;
        }
        catch (error) {
            console.log()
        }
    }

    async deleteUser(req, res) {
        try {
            let conn = await sql.connect(config);
            var model = new User(req.body)

            sql.input('ID', sql.Int, model.id);
            
            var users = await conn.request().query("DELETE FROM USER WHERE ID = @ID");

            return users.recordsets;
        }
        catch (error) {
            console.log()
        }
    }
}

module.exports = new UserRepository();
