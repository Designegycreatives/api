import Message from "../models/message.js"

export const getMsgs = async (req, res) => {
    try {
        const msgs = await Message.find()

        res.status(201).json(msgs)
    } catch (error) {
        res.status(500).json({
            msg: error,
        })
    }
}

export const addMsg = async (req, res) => {
    try {
        const newMsg = await Message.create({ content: req.body.content })
        res.status(201).json(newMsg)
    } catch (error) {
        res.status(500).json({
            msg: error,
        })

    }
}

export const updateMsg = async (req, res) => {
    try {
        await Message.findByIdAndUpdate(req.params.msgId, {$set: req.body},
            {
                new: true
            } 
        )
        res.status(200).json("Message has been updated successfully!")
    } catch (error) {
        res.status(500).json({
            msg: error,
        })

    }
}

export const deleteMsg = async (req, res) => {
    try {
        let msg = await Message.findById(req.params.msgId)

        if (!msg)
            return res.status(404).json({
                msg: "msg Not Found",
            })
        await msg.remove()
        
        res.status(201).json("Msg has been deleted successfully!")
    } catch (error) {
        res.status(500).json({
            msg: error,
        })

    }
}



