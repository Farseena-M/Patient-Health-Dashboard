import express from 'express'
import { createAuthRequest, getAuthRequests } from '../controllers/authRequestController.js'
const authRequestRouter = express.Router()


authRequestRouter.post('/create',createAuthRequest)
.get('/all-requests',getAuthRequests)

export default authRequestRouter