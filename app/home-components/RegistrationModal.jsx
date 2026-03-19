"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Country, State, City } from "country-state-city";
import { apiEndpoint } from "@/util/api-endpoint";
import apiClient from "@/lib/axios";
import { useToast } from "@/components/ui/toast";

const RegistrationModal = ({ isOpen, onClose }) => {
  const { showToast } = useToast();
  const [userId, setUserId] = useState(null);

  if (!isOpen) return null;

  const handleLeadSubmit = async (values) => {
    try {
      const response = await apiClient.post(apiEndpoint.register.default, values);
      if (response.data.success) {
        showToast("Registration successful", "success");
      } else {
        showToast(response.data.message, "error");
      }
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error sending demo request:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        showToast(error.response.data.message, "error");
      } else {
        showToast(
          "Error sending demo request. Please try again later.",
          "error"
        );
      }
      return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-0">
      <div className="relative w-full max-w-full sm:max-w-2xl bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ease-out sm:mx-4 rounded-b-none sm:rounded-b-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Registration</h2>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            country: "",
            city: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            phone: Yup.string().required("Phone is required"),
            country: Yup.string().required("Country is required"),
            city: Yup.string(), // optional
          })}
          onSubmit={async (values, { resetForm }) => {
            const result = await handleLeadSubmit(values);
            if (result && result.success) {
              if (result.redirect) {
                window.location.href = result.redirect;
              } else {
                setUserId(result.user_id);
                resetForm();
                onClose();
              }
            }
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Field
                      name="name"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your name"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
    
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <Field
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <Field
                  as="select"
                  name="country"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => {
                    setFieldValue("country", e.target.value);
                    setFieldValue("city", ""); // reset city when country changes
                  }}
                >
                  <option value="">Select Country</option>
                  {Country.getAllCountries().map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="country" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <Field
                  as="select"
                  name="city"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  disabled={!values.country}
                >
                  <option value="">Select City</option>
                  {values.country &&
                    City.getCitiesOfCountry(values.country).map((city, index) => (
                      <option key={`${city.name}-${index}`} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                </Field>
                <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationModal;