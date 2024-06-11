import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";
// import { Apierror } from "../utils/ApiErrorHandling.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {

    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    console.log(token, "token from the middel ware")
    if (!token) {
        return res.status(401).json(new ApiResponse(401, { isAuthenticated: false }, "Unauthorized req, Go Home! you sneaky developer!"));
    }
    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken.id).select("-password -refreshToken");

        if (!user) {
            return res.status(200).json(new ApiResponse(200, { isAuthenticated: false }, "Invalid Access token"));
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(200).json(new ApiResponse(200, { isAuthenticated: false, message: error.message }));
    }
});
