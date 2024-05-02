const multer = require('multer');
const Volunteer = require('../models/Volunteer');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const ActivitePrive = require('../models/ActivityPrivate');


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads'); 
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname); 
    },
});


const getActivitePriveForLoggedInUser = async (req, res) => {
    try {
        const accessToken = req.cookies.access_token;
        const decodedToken = jwt.decode(accessToken);
        const userId = decodedToken.id;

        const activites = await ActivitePrive.findAll({ where: { id_benevole: userId } });
        
        res.status(200).json({ activites });
    } catch (error) {
        console.error('Error getting activities for logged-in user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// Function to get user info
const getUserInfo = async (req, res) => {
    try {

        const accessToken = req.cookies.access_token;
        const decodedToken = jwt.decode(accessToken);
        const userId = decodedToken.id;



        const volunteer = await Volunteer.findByPk(userId);
        if (!volunteer) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ volunteer });
    } catch (error) {
        console.error('Error getting user info:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const upload = multer({ storage: storage }).fields([
    { name: 'casier_judiciaire', maxCount: 1 }, 
    { name: 'justificatif_permis', maxCount: 1 } 
]);

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
        subject: 'Bienvenue chez les bénévoles !',
        text: `Bonjour ${name},\n\nNous sommes ravis de vous compter parmi nos bénévoles. Bienvenue !`,
        html: `<p>Bonjour <strong>${name}</strong>,</p><p>Nous sommes ravis de vous compter parmi nos bénévoles. Bienvenue !</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email de bienvenue envoyé avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email de bienvenue', error);
    }
};

const registerVolunteer = async (req, res, next) => {
    try {
        const { nom, prenom, date_de_naissance, email, mot_de_passe, telephone, adresse, ville, code_postal, date_adhesion, genre, permis_conduire, langues,qualites, competences, message_candidature } = req.body;
        
        let casier_judiciaireURL = null;
        let justificatif_permisURL = null;

        if (req.files && req.files['casier_judiciaire'] && req.files['casier_judiciaire'][0]) {
            const casierFile = req.files['casier_judiciaire'][0];
            casier_judiciaireURL = casierFile.path; 
        }

        if (req.files && req.files['justificatif_permis'] && req.files['justificatif_permis'][0]) {
            const justificatifFile = req.files['justificatif_permis'][0];
            justificatif_permisURL = justificatifFile.path; 
        }
        const date_inscription = new Date();

        const newVolunteer = await Volunteer.create({
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
            permis_conduire,
            justificatif_permis: justificatif_permisURL,
            casier_judiciaire:  casier_judiciaireURL,
            langues,
            qualites,
            competences,
            message_candidature,
            date_inscription

        });

        await sendWelcomeEmail(email, `${prenom} ${nom}`);

        res.status(201).json({ message: 'Inscription réussie', volunteer: newVolunteer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




const loginVolunteer = async (req, res) => {
  try {
      const { email, password } = req.body;

      if (!email || !password) {
          return res.status(400).json({ error: 'Email and password are required' });
      }

      const volunteer = await Volunteer.findOne({ where: { email } });
      if (!volunteer) {
          return res.status(404).json({ error: 'User not found' });
      }

      if (password !== volunteer.mot_de_passe) {
          return res.status(401).json({ error: 'Invalid password' });
      }

      const token = jwt.sign({ id: volunteer.id, email: volunteer.email }, 'your_secret_key_here', { expiresIn: '1h' });

      res.cookie('access_token', token, {
          httpOnly: true,
          maxAge: 3600000, 
          sameSite: 'strict',
          path: '/'
      });

      res.status(200).json({ message: 'Login successful' });

  } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { upload, registerVolunteer ,loginVolunteer };


const updateVolunteerInfo = async (req, res, next) => {
  try {
    const volunteerId = req.user.id;
    const { nom, prenom, date_naissance, email, mot_de_passe, telephone, adresse, ville, code_postal, date_adhesion, statut } = req.body;

    await Volunteer.update({ nom, prenom, date_naissance, email, mot_de_passe, telephone, adresse, ville, code_postal, date_adhesion, statut }, { where: { id: volunteerId } });

    res.status(200).json({ message: 'Volunteer information updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const updateVolunteerPassword = async (req, res, next) => {
  try {
    const volunteerId = req.user.id;
    const { new_password } = req.body;
    await Volunteer.update({ mot_de_passe: new_password }, { where: { id: volunteerId } });
    res.status(200).json({ message: 'Volunteer password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getUserInfo,
  registerVolunteer,
  loginVolunteer,
  updateVolunteerInfo,
  updateVolunteerPassword,
  getActivitePriveForLoggedInUser,
};
