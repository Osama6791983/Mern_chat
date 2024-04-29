import jwt from "jsonwebtoken"
const generateTokenAndSetCookie = async (userid, res) => {
    const token = jwt.sign({ userid }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,  //to prevent XSS attact  cross site scripting attact
        sameSite: "strict", //csrf attact cross site attact request forgery attact
        secure:process.env.NODE_ENV!=="development"
    })
}

export default generateTokenAndSetCookie;