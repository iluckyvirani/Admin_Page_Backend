import express from "express"
import { banner, getAllBanner } from "../Controllers/BannerController.js"
const router = express.Router()

router.post('/create', banner)
router.get('/getbanners', getAllBanner)

export default router