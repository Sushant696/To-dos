// import { Apierror } from "../utils/ApiErrorHandling.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { generateAccessToken, generateRefreshToken } from "../utils/generateTokens.js";
import { Apierror } from "../utils/ApiErrorHandling.js";
import jwt from "jsonwebtoken";


const registerUser = asyncHandler(async (req, res) => {

    const { username, password, email } = req.body;

    if (username === "" || password === "") {
        return res.status(400).json(new ApiResponse(400, { message: "Username and Password are required" }, "Username and password are required"));
        // throw new Apierror(404, "Username and password are required")
    }

    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existingUser) {
        return res.status(400).json(new ApiResponse(400, { message: "User with this username or email already exist." }, "User with this username or email already exist."));
        // throw new Apierror(409, "User with this username and email already exist.")
    }

    const createdUser = await User.create({
        username,
        password,
        email
    });

    return res.status(201).json(new ApiResponse(201, { message: "User registered successfully" }, "User registered successfully"));
})


const loginUser = asyncHandler(async (req, res) => {

    const { username, password } = req.body;
    if (username === "" || password === "") {
        return res.status(500).json(new ApiResponse(500, {}, "Username or password are required"));
        // throw new Apierror(404, "Username and password are required")
    }

    const user = await User.findOne({ username });
    if (!user) { return res.status(500).json(new ApiResponse(500, {}, "User Not Found!")) }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) { return res.status(500).json(new ApiResponse(500, {}, "Incorrect password!!")) }


    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // assigning our refreshtoken to the database refresh token
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    const loggedInUser = await User.findById(user._id)
        .select("-password -refreshToken") // the loggenInUser will not be avaliable in loggenInUser

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponse(205, { user: { loggedInUser, refreshToken, accessToken } }, ""))
    // sending access and refresh token in response as in frontend user can also save those in local storage or something else giving frontend dev developer different options

})


const logoutUser = asyncHandler(async (req, res) => {

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        { new: true }
    )
    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'None',

    }
    console.log('success')
    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logout successfully"))
})


const refreshAccessToken = asyncHandler(async (req, res) => {

    // access incomming token
    const incommingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
    console.log(incommingRefreshToken, "incommingRefreshToken")
    if (!incommingRefreshToken) {
        throw new Apierror(401, "Unauthorized request")
    }
    try {

        // verify refreshtoken to db stored token
        const decodedToken = jwt.verify(incommingRefreshToken, process.env.REFRESH_TOKEN_SECRET)
        //    The token was sent with payload of id so after decoding, we have that id
        const user = await User.findById(decodedToken?.id);
        console.log(user, "user")
        if (!user) {
            throw new Apierror(401, "Invalid Refresh token")
        }

        if (incommingRefreshToken !== user?.refreshToken) {
            throw new Apierror(401, "Refresh token is expired or used.")
        }

        const options = {
            httpOnly: true,
            secure: true
        }
        console.log(user, "user")
        const accessToken = generateAccessToken(user._id)
        const newRefreshToken = generateRefreshToken(user._id)

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(new ApiResponse(200, { accessToken, refreshToken: newRefreshToken }, "Access token refreshed!"))

    } catch (error) {
        throw new Apierror(404, error?.message || "Something went wrong while refreshing access token")
    }

})

const verifyAccessToken = asyncHandler(async (req, res) => {
    return res.status(200).json(new ApiResponse(200, { isAuthenticated: true }, "User is authenticated"));
});

export { registerUser, loginUser, logoutUser, refreshAccessToken, verifyAccessToken }

