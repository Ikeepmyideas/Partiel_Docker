const express = require('express');
const router = express.Router();
const upload = require('../multerConfig');
const jwt = require('jsonwebtoken');
const cors = require('cors');
router.use(cors({
    origin: 'http://localhost:3000',
    credentials: true 
  }));
const { registerBeneficiary } = require('../controllers/beneficiaryController');
const { login} = require('../controllers/beneficiaryController');
const {getUserInfo} = require('../controllers/beneficiaryController');
const {updateBeneficiary} = require('../controllers/beneficiaryController');
const { getActivitePriveForLoggedInUser } = require('../controllers/beneficiaryController'); // Import the new controller
const ImageProfile = require('../models/ImageProfile');
const Beneficiary = require('../models/Beneficiary')
const { createProblem } = require('../controllers/problemController');



// Route for creating a problem

const setCookie = require('../middleware/setCookie');
router.post('/problems', createProblem);
router.post('/login', login);
router.post('/registerBeneficiary', upload, registerBeneficiary);
router.get('/userinfo', getUserInfo);
router.get('/activites_prives', getActivitePriveForLoggedInUser);
// router.get('/activities/latest', adminController.getLatestActivities);
// router.get('/activites', adminController.getActivities);
// router.get('/activites/:ID_Activite', adminController.showEvent);

const Blog = require('../models/Blog');


const authentication = require('../middleware/authentication');


// PUT route to update a beneficiary record
router.put('/beneficiary', async (req, res) => {
  try{
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


      // Extract the updated data from the request body
      const updatedData = req.body;

      // Update the beneficiary record using the ID
      const updatedBeneficiary = await updateBeneficiary(userId, updatedData);

      // Respond with the updated beneficiary record
      res.status(200).json(updatedBeneficiary);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

router.get('/logout', (req, res) => {
    try {
      // Effacer le cookie d'accès_token
      res.clearCookie('access_token');
  
      // Répondre avec un statut 200 pour indiquer que la déconnexion a réussi
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      console.error('Error logging out:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
// // Protected route example
// router.get('/protected', authentication, async (req, res) => {
//     try {
//         // Assuming req.user contains the decoded user object
//         const userId = req.user.id;

//         // Fetch the image path from the database based on the user's ID
//         const profileImage = await ImageProfile.findOne({
//             where: { ID_Beneficiaire: userId }
//         });

//         if (!profileImage) {
//             return res.status(404).json({ error: 'Profile image not found' });
//         }

//         // Send the profile image path as a response
//         res.json({ profileImagePath: profileImage.image_path });
//     } catch (error) {
//         console.error('Error fetching profile image:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// Protected route example


router.get('/articles', async (req, res) => {
  try {
    const articles = await Blog.findAll();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.get('/articles/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Blog.findByPk(id);

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
