import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
    try {
        const logedInUser = req.user._id;
        //every user has to be find but not the current user logged in
        const filteredUsers = await User.find({ _id: { $ne: logedInUser } }).select("-password");
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log(`Error in get users for side bar controller ${error.message}`);
        res.status(500).json({ message: "Internal server error" })
    }
}

