import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { adminInstance } from '../axios_instance/AdminInstance';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/Sidebar';

const AuthPage = () => {
  // const Nvgt = useNavigate()
  const formik = useFormik({
    initialValues: {
      treatmentType: '',
      insurancePlan: '',
      diagnosisCode: '',
      dateOfService: '',
    },
    validationSchema: Yup.object({
      treatmentType: Yup.string()
        .required('Treatment Type is required'),
      insurancePlan: Yup.string()
        .required('Insurance Plan is required'),
      diagnosisCode: Yup.string()
        .required('Diagnosis Code is required'),
      dateOfService: Yup.date()
        .required('Date of Service is required')
        .nullable(),
    }),
    onSubmit: async (values) => {
      try {
        const res = await adminInstance.post('/api/authRequest/create', values);
        // console.log(res);
        // Nvgt('/requestdetails')
        alert('Authorization request submitted');
        formik.resetForm();
      } catch (error) {
        console.error('Error submitting the form:', error);
        alert('Failed to submit the request. Please try again.');
      }
    },
  });

  return (
    <>
    <SideBar />
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-50 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-3xl font-bold text-center mb-4 text-purple-800 font-serif">Submit Prior Authorization</h2>

          <div className="mb-3">
            <label className="block text-gray-500 mb-1 font-semibold">Treatment Type</label>
            <input
              type="text"
              name="treatmentType"
              value={formik.values.treatmentType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border ${formik.touched.treatmentType && formik.errors.treatmentType ? 'border-yellow-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400`}
              placeholder="Enter Treatment Type"
            />
            {formik.touched.treatmentType && formik.errors.treatmentType ? (
              <div className="text-yellow-500 text-sm text-center">{formik.errors.treatmentType}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label className="block text-gray-500 mb-1 font-semibold">Insurance Plan</label>
            <input
              type="text"
              name="insurancePlan"
              value={formik.values.insurancePlan}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border ${formik.touched.insurancePlan && formik.errors.insurancePlan ? 'border-yellow-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400`}
              placeholder="Enter Insurance Plan"
            />
            {formik.touched.insurancePlan && formik.errors.insurancePlan ? (
              <div className="text-yellow-500 text-sm text-center">{formik.errors.insurancePlan}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label className="block text-gray-500 mb-1 font-semibold">Diagnosis Code</label>
            <input
              type="number"
              name="diagnosisCode"
              value={formik.values.diagnosisCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border ${formik.touched.diagnosisCode && formik.errors.diagnosisCode ? 'border-yellow-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400`}
              placeholder="Enter Diagnosis Code"
            />
            {formik.touched.diagnosisCode && formik.errors.diagnosisCode ? (
              <div className="text-yellow-500 text-sm text-center">{formik.errors.diagnosisCode}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label className="block text-gray-500 mb-1 font-semibold">Date of Service</label>
            <input
              type="date"
              name="dateOfService"
              value={formik.values.dateOfService}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border ${formik.touched.dateOfService && formik.errors.dateOfService ? 'border-yellow-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400`}
            />
            {formik.touched.dateOfService && formik.errors.dateOfService ? (
              <div className="text-yellow-500 text-sm text-center">{formik.errors.dateOfService}</div>
            ) : null}
          </div>

          <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition duration-200 font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AuthPage;
