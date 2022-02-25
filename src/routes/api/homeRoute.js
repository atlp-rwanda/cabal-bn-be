import express from "express"

const home = express.Router()

home.get("/", (req, res, next) => {
    res.send("Welcome to our homepage")
})

export default home;
