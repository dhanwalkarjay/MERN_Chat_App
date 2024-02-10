import express from "express";
import { login, logout, signup } from "../controlers/auth.controlers.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;