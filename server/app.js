import express from 'express'
import cors from 'cors';
import patientRouter from './src/router/patientRoutes.js';
import authRequestRouter from './src/router/authRequestRouter.js';
import authRouter from './src/router/authRouter.js';
const app = express()


app.use(express.json())
app.use(cors());

app.use('/api',authRouter ,patientRouter)
app.use('/api/authRequest', authRequestRouter)


export default app;