import express from 'express';

const PORT = 4000;

const app= express();

const gossipMiddleware = (req, res, next) => {
    console.log("I'm in the middle");


    res.send("haha")
    next();
}

const handleHome = (req, res) => {
    return res.send("hi");
};

app.get("/", gossipMiddleware, handleHome);

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);