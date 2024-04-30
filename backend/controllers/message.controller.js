import converstaionModel from "../models/conversation.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import messageModel from "./../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id;
        let conversation = await converstaionModel.findOne({
            participants: { $all: [recieverId, senderId] },
        });
        if (!conversation) {
            conversation = await converstaionModel.create({
                participants: [recieverId, senderId],
            });
        }
        const newMessage = new messageModel({ senderId, recieverId, message });
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
       

        // await conversation.save();
        // await newMessage.save();
        //optimization of my code here
        // this will run parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(recieverId)
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage",newMessage);
        }
        res.status(201).json({ newMessage });
    } catch (error) {
        console.log(`Error in send message controller ${error.message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: recieverId } = req.params;
        const senderId = req.user._id;

        const conversation = await converstaionModel
            .findOne({ participants: { $all: [senderId, recieverId] } })
            .populate("messages");
        if (!conversation) {
            return res
                .status(200)
                .json([]);
        }
        let messages = conversation?.messages;
        res.status(200).json(messages);
    } catch (error) {
        console.log(`Error in send message controller ${error.message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
