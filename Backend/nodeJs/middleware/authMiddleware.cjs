const jwt = require('jsonwebtoken');

function verifierToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: 'Token manquant'
        });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'Format du token incorrect'
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.utilisateur = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            message: 'Token invalide ou expiré'
        });
    }
}

module.exports = verifierToken;