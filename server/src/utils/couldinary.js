import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dvrm0w6ox",
  api_key: process.env.CLOUDINARY_API_KEY || 231233948562838,
  api_secret:
    process.env.CLOUDINARY_API_SECRET || "8Amhu7ykQ7lZE31QkwVl9_vVfww",
});

const uploadOnCoudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log(`File uploaded successfully: ${response.url}`);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.error(`Error uploading file to Cloudinary: ${error.message}`);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCoudinary };

// Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url("shoes", {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });

//     console.log(autoCropUrl);
// })();
