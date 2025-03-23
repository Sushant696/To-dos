import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateTokens.js";
import { Apierror } from "../utils/ApiErrorHandling.js";
import jwt from "jsonwebtoken";

import { uploadOnCoudinary } from "../utils/couldinary.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;

  if (username === "" || password === "" || email === "") {
    return res
      .status(400)
      .json(
        new ApiResponse(
          400,
          { message: "All fields are required" },
          "All Fields are required",
        ),
      );
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    return res
      .status(400)
      .json(
        new ApiResponse(
          400,
          { message: "User with this username or email already exist." },
          "User with this username or email already exist.",
        ),
      );
  }

  await User.create({
    username,
    password,
    email,
  });

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { message: "User registered successfully" },
        "User registered successfully",
      ),
    );
});

const loginUser = asyncHandler(async (req, res) => {
  const { usernameOrEmail, password } = req.body;
  if (usernameOrEmail === "" || password === "") {
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "Username or password are required"));
  }
  const isEmail = usernameOrEmail.trim().includes("@");

  const user = await User.findOne(
    isEmail ? { email: usernameOrEmail } : { username: usernameOrEmail },
  );

  if (!user) {
    return res.status(500).json(new ApiResponse(500, {}, "User Not Found!"));
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "Incorrect password!!"));
  }

  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        205,
        { user: { loggedInUser, refreshToken, accessToken } },
        "",
      ),
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    { new: true },
  );
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logout successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  // access incomming token
  const incommingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;
  if (!incommingRefreshToken) {
    throw new Apierror(401, "Unauthorized request");
  }
  try {
    // verify refreshtoken to db stored token
    const decodedToken = jwt.verify(
      incommingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );
    //    The token was sent with payload of id so after decoding, we have that id
    const user = await User.findById(decodedToken?.id);
    if (!user) {
      throw new Apierror(401, "Invalid Refresh token");
    }

    if (incommingRefreshToken !== user?.refreshToken) {
      throw new Apierror(401, "Refresh token is expired or used.");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };
    const accessToken = generateAccessToken(user._id);
    const newRefreshToken = generateRefreshToken(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed!",
        ),
      );
  } catch (error) {
    throw new Apierror(
      404,
      error?.message || "Something went wrong while refreshing access token",
    );
  }
});

const verifyAccessToken = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(
      new ApiResponse(200, { isAuthenticated: true }, "User is authenticated"),
    );
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user._id; // Assuming you are using authentication middleware to attach user to req
  const { fullName, nickName, role } = req.body;
  const avatarPath = req.files?.avatar?.[0].path;

  if (!avatarPath) {
    throw new Apierror(403, "Invalid path for user avatar..");
  }

  const avatarFileRefCloudinary = await uploadOnCoudinary(avatarPath);

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      fullName,
      role,
      nickName,
      avatar: avatarFileRefCloudinary.url,
      ProfileComplete: true,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedUser) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Unable to update user details"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User details updated successfully"));
});

const getUserDetails = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select(
    "-refreshToken -password",
  );

  if (!user) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Unable to get user details"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, "User details retrieved"));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  verifyAccessToken,
  updateUserProfile,
  getUserDetails,
  // getProfileComplete,
};
