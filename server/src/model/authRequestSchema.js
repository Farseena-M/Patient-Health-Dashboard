import mongoose from 'mongoose';

const authRequestSchema = new mongoose.Schema({
  // patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  treatmentType: { type: String, required: true },
  insurancePlan: { type: String, required: true },
  diagnosisCode: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  dateOfService: { type: Date },
}, { timestamps: true });

const AuthRequest = mongoose.model('AuthRequest', authRequestSchema);
export default AuthRequest;
