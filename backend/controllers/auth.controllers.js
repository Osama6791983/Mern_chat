import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    console.log(req.body);
    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Password don't match",
      });
    }

    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({
        error: "username already exist",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    const newUser = new User({
      fullName,
      userName,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      await newUser.save();
      generateTokenAndSetCookie(newUser?._id, res);
      return res.status(200).json({  // Adjusted this line
        fullName: newUser.fullName,
        userName: newUser.userName,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
        _id:newUser._id,
      });
    } else {
      return res.status(400).json({ message: "Invalid User Data" }); // Adjusted this line
    }
  } catch (error) {
    console.error(`Error in signup controller ${error.message}`);
    return res.status(500).json({ message: "Internal Server Error" }); // Adjusted this line
  }
};


export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const checkPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || " "
    );
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    if (!checkPasswordCorrect&&user) {
       return res.status(400).json({ message: "Invalid email or password" });
    }
    generateTokenAndSetCookie(user?._id, res);
    res.status(200).json({
      fullName: user.fullName,
      userName: user.userName,
      gender: user.gender,
      profilePic: user.profilePic,
      _id:user._id,
    });
  } catch (error) {
    
    console.log(`Error in login controller ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Logged out Successfully" })
  } catch (error) {
    console.log(`Error in logout controller ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
