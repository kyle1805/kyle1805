import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
  firstName: yup
    .string()
    .required("Please fill me")
    .max(10, "Must be 10 character or less"),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    if (isValid) {
    }
    // const reponse = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return reponse.data;
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First name :</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name ..."
          className="p-4 rounded-md border border-gray-100"
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />
        {errors?.firstName && (
          <div className=" text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last name :</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name ..."
          className="p-4 rounded-md border border-gray-100"
          {...register("lastName", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <div className=" text-red-500 text-sm">
            Please fill out this field
          </div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className=" text-red-500 text-sm">
            Must be 10 character or less than 10
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">email :</label>
        <input
          type="email"
          id="lastName"
          placeholder="Enter your last email ..."
          className="p-4 rounded-md border border-gray-100"
          {...register("email")}
        />
      </div>

      <div className="w-full h-full">
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
