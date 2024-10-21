import express from 'express'
import { createAuthRequest, getAuthRequests } from '../controllers/authRequestController.js'
import { VerifyToken } from '../utils/verifyToken.js'
const authRequestRouter = express.Router()

authRequestRouter.post('/create/:patientId', VerifyToken, createAuthRequest);
authRequestRouter.get('/all-requests', VerifyToken, getAuthRequests);

export default authRequestRouter