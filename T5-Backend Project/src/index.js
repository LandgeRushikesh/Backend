// require("dotenv").config({path:"./env"})

import dotenv from "dotenv"
dotenv.config({
    path: "./.env"
})
import connectDB from "./db/index.js";
import { app } from "./app.js";


/*

// First Approach to Connect Database


; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);

        })
    }
    catch (err) {
        console.log(err);
    }
})()

*/

// Second Approach to Connect DB

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MonogoDB connection failed!!!", err);
    })