import mongoose from 'mongoose';

const patientDetailsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    condition: { type: String },
    treatmentResult: {
        type: String,
        required: true,
    },
    medication: {
        type: String,
        required: true,
    },
    labResults: {
        type: String,
        required: true,
    }
});

const PatientDetails = mongoose.model('PatientDetails', patientDetailsSchema);
export default PatientDetails;
