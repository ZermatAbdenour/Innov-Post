// filesMiddleware.js
const multer = require('multer');
const path = require('path');

// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to save the uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Save file with a unique name
    }
});

// Create multer upload instance
const upload = multer({
    storage: storage
});



module.exports = { upload };