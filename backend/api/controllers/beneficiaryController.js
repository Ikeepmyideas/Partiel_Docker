const multer = require('multer');
const nodemailer = require('nodemailer');

const jwt = require('jsonwebtoken');
const Beneficiary = require('../models/Beneficiary');
const ActivitePrive = require('../models/ActivityPrivate');


const generateToken = (id, email) => {
    const secret = process.env.ACCESS_TOKEN_SECRET || 'default_secret_key';
    return jwt.sign({ id, email }, secret, { expiresIn: '1h' });
};


const getActivitePriveForLoggedInUser = async (req, res) => {
    try {
        const accessToken = req.cookies.access_token;
        const decodedToken = jwt.decode(accessToken);
        const userId = decodedToken.id;

        const activites = await ActivitePrive.findAll({ where: { id_beneficiaire: userId } });
        
        res.status(200).json({ activites });
    } catch (error) {
        console.error('Error getting activities for logged-in user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateBeneficiary = async (id, updatedData) => {
    try {
      const beneficiary = await Beneficiary.findByPk(id);
  
      if (!beneficiary) {
        throw new Error('Beneficiary not found');
      } 
  
      await beneficiary.update(updatedData);
  
      return beneficiary;
    } catch (error) {
      throw new Error(`Failed to update beneficiary: ${error.message}`);
    }
  };

const authMiddleware = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};

// Function to get user info

const getUserInfo = async (req, res) => {
    try {
        const token = req.cookies.access_token;

        if (!token) {
            return res.status(401).json({ error: 'No token found' });
        }

        const decodedToken = jwt.decode(token);
        const userId = decodedToken.id;

        const beneficiary = await Beneficiary.findByPk(userId);

        if (!beneficiary) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ beneficiary });
    } catch (error) {
        console.error('Error getting user info:', error);
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Invalid token' });
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Function for user login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Vérifier si l'email et le mot de passe sont fournis
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Trouver le bénéficiaire par email
        const beneficiary = await Beneficiary.findOne({ where: { email } });
        if (!beneficiary) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Vérifier si le mot de passe correspond
        if (password !== beneficiary.mot_de_passe) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT token
        const token = generateToken(beneficiary.id, beneficiary.email);

        // Set the token as a cookie in the response
        res.cookie('access_token', token, {
            httpOnly: true,
            maxAge: 3600000, // 1 hour
            sameSite: 'strict',
            path: '/'
                });

        // Respond with a success message
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads'); // Destination des fichiers téléchargés
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname); // Nom du fichier téléchargé
    },
});

const upload = multer({ storage: storage }).fields([
    { name: 'avis_impot', maxCount: 1 }, // Un seul fichier pour le casier judiciaire
]);

// Fonction pour envoyer un e-mail de bienvenue
const sendWelcomeEmail = async (email, name) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,

        subject: 'Bienvenue dans notre communauté de bénéficiaires !',
        text: `Bonjour ${name},\n\nNous sommes heureux de vous accueillir comme bénéficiaire. Votre engagement est précieux pour nous et nous avons hâte de collaborer ensemble pour faire une différence. Bienvenue dans la communauté !`,
        html: `<p>Bonjour <strong>${name}</strong>,</p><p>Nous sommes heureux de vous accueillir comme bénéficiaire. Votre engagement est précieux pour nous et nous avons hâte de collaborer ensemble pour faire une différence. Bienvenue dans la communauté !</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email de bienvenue envoyé avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email de bienvenue', error);
    }
};

const registerBeneficiary = async (req, res, next) => {
    try {
        const { nom, prenom, date_de_naissance, email, mot_de_passe, telephone, adresse, ville, code_postal, date_adhesion, genre,besoin } = req.body;
        
        let avis_impotURL = null;

        if (req.files && req.files['avis_impot'] && req.files['avis_impot'][0]) {
            const avis_impotFile = req.files['avis_impot'][0];
            avis_impotURL = avis_impotFile.path; 
        }

      
        const date_inscription = new Date();

        const newBeneficiary = await Beneficiary.create({
            nom,
            prenom,
            date_de_naissance,
            email,
            mot_de_passe,
            telephone,
            adresse,
            ville,
            code_postal,
            date_adhesion,
            statut_validation: "en attente",
            genre,
            avis_impot: avis_impotURL,
            besoin,
            date_inscription

        });

        // Envoyer un email de bienvenue
        await sendWelcomeEmail(email, `${prenom} ${nom}`);

        res.status(201).json({ message: 'Inscription réussie', volunteer: newBeneficiary });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.getLatestActivities = async (req, res) => {
    try {
      const activities = await Activity.findAll({
        include: [{
          model: Lieu, 
          as: 'lieu' 
        }],
        order: [['date_create', 'DESC']],
        limit: 4
      });
      
      res.status(200).json(activities);
    } catch (error) {
      console.error("Erreur lors de la récupération des dernières activités :", error);
      res.status(500).json({ message: "Erreur lors de la récupération des dernières activités." });
    }
  };
  
  exports.getPastActivities = async (req, res) => {
    try {
      const today = new Date(); 
  
      const publicActivities = await Activity.findAll({
        where: {
          date_activite: {
            [Op.lt]: today
          }
        },
        include: [{
          model: Lieu,
          as: 'lieu'
        }],
        order: [['date_activite', 'DESC']]
      });
  
      publicActivities.sort((a, b) => new Date(b.date_create) - new Date(a.date_create));
  
      res.status(200).json(publicActivities);
    } catch (error) {
      console.error("Erreur lors de la récupération des activités passées :", error);
      res.status(500).json({ message: "Erreur lors de la récupération des activités passées." });
    }
  };
  
  exports.getActivities = async (req, res) => {
    try {
      const today = new Date();
      const activities = await Activity.findAll({
        where: {
          date_activite: {
            [Op.gt]: today 
          }
        },
        include: [{
          model: Lieu, 
          as: 'lieu' 
        }], order: [
          ['date_activite', 'ASC'] 
        ]
      });
      
      res.status(200).json(activities);
    } catch (error) {
      console.error("Erreur lors de la récupération des dernières activités :", error);
      res.status(500).json({ message: "Erreur lors de la récupération des dernières activités." });
    }
  };

  
module.exports = { login, authMiddleware ,upload, registerBeneficiary, getUserInfo, updateBeneficiary, getActivitePriveForLoggedInUser };
