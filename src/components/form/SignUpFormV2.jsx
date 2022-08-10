import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length < 8) {
//     errors.lastName = "Must be 8 characters or more";
//   }
//   return errors;
// };

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .min(8, "Must be 8 characters or more")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
      autoComplete="off"
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">First name :</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your first name ..."
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Last name :</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Enter your last name ..."
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>

        <div className="w-full h-full">
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpFormV2;
