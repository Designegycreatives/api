import express from "express"
import { addMsg, deleteMsg, getMsgs, updateMsg } from "../controllers/msgs.js"

const router = express.Router()

router.get("/", getMsgs)
router.post("/", addMsg)
router.put("/:msgId", updateMsg)
router.delete("/:msgId", deleteMsg)




export default router
