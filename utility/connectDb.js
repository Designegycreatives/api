import mongoose from "mongoose"

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}


const connectDb = () => {
    if (mongoose.connections[0].readyState) {
        console.log("MongoDB already connected")
        return
    }
    return mongoose.connect(process.env.MONGO_URL, options, () => {
        console.log("connected successfully to the DB!")
    })
}

export default connectDb
