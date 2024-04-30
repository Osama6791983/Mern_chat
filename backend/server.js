import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import path from "path";

import cors from 'cors';
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"


import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';



// const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve()


dotenv.config()

// const allowedOrigins = [
//     "http://localhost:3000",
//     ,]
// app.use(cors({
//     origin: function (origin, callback) {
//         // Allow requests with no origin (like mobile apps, curl requests)
//         if (!origin) return callback(null, true);

//         if (allowedOrigins.indexOf(origin) === -1) {
//             const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     },
//     credentials: true
// }));
app.use(express.json())
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/messages", messageRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")));
app.get("*",(req,res)=>{

    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`server running on port ${PORT}`);
})