import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send(`${'http://localhost:5000/'}`)
});

app.get("/api/auth/signup", (req, res) => {
    console.log("signup rout");
});

app.listen(PORT, () => console.log(`server is running on post ${PORT}`));


