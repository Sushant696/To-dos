import multer from "multer";
// multer as middleware

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        const uniqueSufix = Date.now() + "_" + Math.round(Math.random() * 1E9)
        cb(null, file.filename + "_" + uniqueSufix) // temp name which will be saved in public/temp folder generating unique name for that time 
    }
})

export const upload = multer({
     storage: storage
     }) // 