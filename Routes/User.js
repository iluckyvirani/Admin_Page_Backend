import express from "express"
import { register, getAllUser } from "../Controllers/UserController.js"
const router = express.Router()

router.post('/register', register)
router.get('/getusers', getAllUser)

export default router