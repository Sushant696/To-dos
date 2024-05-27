import { asyncHandler } from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken"
import { User } from "../models/user.models.js"
import { Apierror } from "../utils/ApiErrorHandling.js"

export const verifyJWT = asyncHandler(async (req, res, next) => {

    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401, {}, "Unauthorized request")
        // throw new Apierror(401, "unauthorized request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const user = await User.findById(decodedToken?.id).select("-password -refreshToken")
    if (!user) {
        throw new Apierror(401, "Invalid Access token")
    }

    req.user = user; // giving user access to all the req through out our app where we have used the middleware verifyJWT
    next();

})

// adding new object user to the all the req and res so that we can take user id here

// if the user do not have accesss to cookie like for mobile application that time user(frontend) will send authorization header with (bearer <token>) this so making system full proof and scalable