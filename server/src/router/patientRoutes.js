import express from 'express'
import { addPatient, getPatient, getPatientById } from '../controllers/patientController.js'
const patientRouter = express.Router()


patientRouter.post('/createpatient',addPatient)
.get('/patients',getPatient)
.get('/patient/:id',getPatientById)

export default patientRouter