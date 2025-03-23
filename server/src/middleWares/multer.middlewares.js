import multer from "multer";
import fs from 'fs';
import path from 'path';

// Ensure the directory exists
const uploadDir = './public/images';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage }).fields([
  { name: "avatar", maxCount: 1 },
]);

export default upload;