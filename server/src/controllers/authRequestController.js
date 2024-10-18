import AuthRequest from "../model/authRequestSchema.js";

export const createAuthRequest = async (req, res) => {
  try {
    const newAuthRequest = new AuthRequest(req.body);
    const authRequest = await newAuthRequest.save();
    res.json(authRequest);
  } catch (err) {    
    res.status(500).json({ message: 'Server Error' });
  }
};

// export const getAuthRequests = async (req, res) => {
//     try {
//       const authRequests = await AuthRequest.find().populate('patientId');
//       res.json(authRequests);
//     } catch (err) {
//       res.status(500).json({ message: 'Server Error' });
//     }
//   };
