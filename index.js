import express from "express"
import cors from "cors"
import helmet from "helmet"
import msgsRoute from "./routes/msgs.js"
import dotenv from "dotenv"
import connectDb from "./utility/connectDb.js"


const app = express()
const port = process.env.PORT || 5000

const corsOptions = {
    origin: "*",
    "Access-Control-Allow-Origin": true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(helmet())

dotenv.config()
connectDb()

app.use("/msgs", msgsRoute)


app.get("/", (req, res) => {
    res.send("Welcome to our new API Project!")
})

app.use((req, res, next) => {
    const error = new Error("Something Went Wrong")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message,
        },
    })
})

app.listen(port, (err) => {
    if (err) throw new Error("Error while connecting to the server")
    console.log('Server is liveand running at: http://localhost:${port}')
})

export default app
