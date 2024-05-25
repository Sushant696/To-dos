// import { jwt } from "jsonwebtoken";
import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
    /**
     * user is a current user  
     */

    return jwt.sign(
        { id: user._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
}

const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

export { generateAccessToken, generateRefreshToken }


// These are the generated tokens which will have the data 