import mongoose from "mongoose";
import "dotenv/config"

const key = process.env.KEY

mongoose.connect(key, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

})

const db = mongoose.connection

db.on("error", (err) => {

    console.error("Connection failure: ", err)

})

db.once("open", () => {

    console.log("Connection success ")

})


export default db