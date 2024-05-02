const jwt = require('jsonwebtoken');
const Beneficiary = require('../models/Beneficiary');

module.exports = async function (req, res, next) {
    const accessToken = req.cookies.access_token;
        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        const userId = decodedToken.id;
        const activites = await Beneficiary.findAll({ where: { id: userId } });
        res.status(200).json({ activites });

};
