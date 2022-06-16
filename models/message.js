import mongoose from "mongoose"

const messageSchema = new mongoose.Schema(
    {
     content: {
        type: String,
        required: [true, "Please provide message content"],
     },
    },
    {
     timestamps: true,
    }
)

const Dataset = mongoose.models.message || mongoose.model("message", messageSchema)

export default Dataset
