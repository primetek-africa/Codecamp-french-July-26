const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

let utilisateurs = [];
let prochainId = 1;

// INSCRIPTION
router.post('/register', async (req, res) => {
    try {
        const { nom, email, password } = req.body;

        if (!nom || !email || !password) {
            return res.status(400).json({
                message: 'Tous les champs sont obligatoires'
            });
        }

        const utilisateurExiste = utilisateurs.find(
            user => user.email === email
        );

        if (utilisateurExiste) {
            return res.status(409).json({
                message: 'Cet email existe déjà'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const nouvelUtilisateur = {
            id: prochainId++,
            nom,
            email,
            password: hashedPassword
        };

        utilisateurs.push(nouvelUtilisateur);

        res.status(201).json({
            message: 'Inscription réussie',
            utilisateur: {
                id: nouvelUtilisateur.id,
                nom: nouvelUtilisateur.nom,
                email: nouvelUtilisateur.email
            }
        });

    } catch (error) {
        res.status(500).json({
            message: 'Erreur du serveur'
        });
    }
});

// CONNEXION
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const utilisateur = utilisateurs.find(
            user => user.email === email
        );

        if (!utilisateur) {
            return res.status(401).json({
                message: 'Email ou mot de passe incorrect'
            });
        }

        const motDePasseValide = await bcrypt.compare(
            password,
            utilisateur.password
        );

        if (!motDePasseValide) {
            return res.status(401).json({
                message: 'Email ou mot de passe incorrect'
            });
        }

        const token = jwt.sign(
            {
                id: utilisateur.id,
                email: utilisateur.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || '1h'
            }
        );

        res.json({
            message: 'Connexion réussie',
            token
        });

    } catch (error) {
        res.status(500).json({
            message: 'Erreur du serveur'
        });
    }
});

module.exports = router;
