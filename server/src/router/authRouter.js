import express from 'express'
import { adminLogin } from '../controllers/authController.js'
const authRouter = express.Router()


authRouter.post('/login',adminLogin)


export default authRouter