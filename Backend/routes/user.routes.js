import express  from "express";
import protectRoute from "../middleWare/protectRoute.js";
import { getUsersForSidebar } from "../controlers/user.controler.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar)

export default router;