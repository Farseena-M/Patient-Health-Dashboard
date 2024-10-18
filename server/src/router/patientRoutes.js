import express from 'express'
import { addPatient, getPatient, getPatientById } from '../controllers/patientController.js'
import { VerifyToken } from '../utils/verifyToken.js';
const patientRouter = express.Router()

patientRouter.post('/createpatient', VerifyToken, addPatient);
patientRouter.get('/patients', VerifyToken, getPatient);
patientRouter.get('/patient/:id', VerifyToken, getPatientById);


export default patientRouter