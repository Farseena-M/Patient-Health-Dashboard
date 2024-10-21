import AuthRequest from "../model/authRequestSchema.js";


export const createAuthRequest = async (req, res) => {
  const { treatmentType, insurancePlan, diagnosisCode, dateOfService } = req.body;
  const { patientId } = req.params;

  try {
    const newAuthRequest = new AuthRequest({
      patientId,
      treatmentType,
      insurancePlan,
      diagnosisCode,
      dateOfService,
    });

    const savedAuthRequest = await newAuthRequest.save();
    res.status(201).json(savedAuthRequest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};




export const getAuthRequests = async (req, res) => {
  try {
    const authRequests = await AuthRequest.find()
      .populate('patientId', 'name');
    // console.log(authRequests); 
    res.json(authRequests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};




