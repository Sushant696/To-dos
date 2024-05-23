import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'; // file system


(async function () {

    // Configuration
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadOnCoudinary = async (localFilePath) => {
        try {
            if (!localFilePath) return null;

            // upload file to couldinary
            const uploadResponse = await cloudinary.uploader.upload(localFilePath,
                {
                    resource_type: 'auto'
                })
            // file uploaded successfully
            console.log("File uploaded successfully on couldinary")
            console.log(uploadResponse.url)
            return uploadResponse; // returning upload response to the user, the one who uploads 
        } catch (error) {
            fs.unlinkSync(localFilePath) // remove the locally saved temp file if file upload operation failed 
            return null;
        }
    }
})


export { uploadOnCoudinary }

// Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url("shoes", {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });

//     console.log(autoCropUrl);
// })();