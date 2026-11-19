const jwt = require('jsonwebtoken');
require('dotenv').config();

const utilisateur = {
    id: 1,
    email: 'jean@gmail.com'
};

const token = jwt.sign(
    utilisateur,
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
);

console.log(token);