"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
async function register(req, res) {
    return res.send({
        message: 'Olá mundo'
    });
}
