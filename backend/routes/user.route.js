import express from 'express';
import { getUsersForSideBar } from '../controllers/user.controller.js';
import protectRoute from '../middleware/protecteRoute.js';

const app = express();
const router = express.Router();

router.post("/",protectRoute,getUsersForSideBar);
export default router;
