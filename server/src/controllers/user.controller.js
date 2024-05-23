import { Apierror } from "../utils/ApiErrorHandling.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js"
import { ApiResponse } from "../utils/ApiResponse.js"


const registerUser = asyncHandler(async (req, res) => {
    // get the response 
    // check validate the username and password
    //if user name and password are correct save the user to the data base
    // return the response to the frontend

    const { username, password, email } = req.body;
    console.log(req.body)

    if (username === "" || password === "") {
        throw new Apierror(404, "Username and password are required")
    }

    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existingUser) {
        throw new Apierror(409, "User with this username and email already exist.")
    }

    const createdUser = await User.create({
        username,
        password,
        email
    });

    
    // generate jwt containing user info in claims and signs it with a secret key 
    // send that key to user
    return res.status(201).json(new ApiResponse(200, { message: "user Registered Successfully" })) // sending to frontend as response
})


const loginUser = asyncHandler(async (req, res) => {

    // access the data and check the password validation 
    // find if the user exist or not 

    const { username, password } = req.body;
    if (username === "" || password === "") {
        throw new Apierror(404, "Username and password are required")
    }

    const user = await User.findOne({ username });
    if (!user) {
        throw new Apierror(404, "User not found!");
    }
    // console.log(await user.isPasswordCorrect(password))
    const isPasswordValid = await User.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new Apierror(409, "Please enter a correct password !!!");
    }

    res.status(200).json("User Login success")
})

const logoutUser = asyncHandler(async (req, res) => {
    res.status(291).json("User logout successfully")
})

export { registerUser, loginUser, logoutUser }

