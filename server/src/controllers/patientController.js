import PatientDetails from "../model/patientDetailsSchema.js";


export const addPatient = async (req, res) => {
    try {
        const newPatient = new PatientDetails({
            name: req.body.name,
            age: req.body.age,
            condition: req.body.condition,
            treatmentResult: req.body.treatmentResult,
            medication: req.body.medication,
            labResults: req.body.labResults
        });

        await newPatient.save();

        res.status(201).json({
            message: 'Patient added successfully',
            data: newPatient
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


export const getPatient = async (req, res) => {
    try {
        const patient = await PatientDetails.find();
        res.status(200).json({
            message: 'Success',
            data: patient
        })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}



export const getPatientById = async (req, res) => {
    try {
        const patient = await PatientDetails.findById(req.params.id);
        if (!patient) return res.status(404).json({ message: 'Patient not found' });
        res.status(200).json({
            message: 'Success',
            data: patient
        })
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};