import express from 'express'
import { createAuthRequest } from '../controllers/authRequestController.js'
import { VerifyToken } from '../utils/verifyToken.js'
const authRequestRouter = express.Router()

authRequestRouter.post('/create', VerifyToken, createAuthRequest);
// authRequestRouter.get('/all-requests', VerifyToken, getAuthRequests);

export default authRequestRouter