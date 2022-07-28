import React, { useState } from "react";

import useHandleChange from "../../hook/useHandleChange";

const Form2 = () => {
  const { values, handleInputChange, nameError, handleSubmitForm } =
    useHandleChange({
      fullname: "",
      email: "",
      hobby: false,
    });

  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        {/* {fullname} */}
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
            placeholder="Enter your name "
            onChange={handleInputChange}
          />
          {nameError}
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
          placeholder="Enter your Email"
          onChange={handleInputChange}
        />
        <input type="checkbox" name="hobby" onChange={handleInputChange} />
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
      </form>
      {/* {message}
    
          <textarea
            name="message"
            placeholder="Write somethings ...."
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            onChange={handleTextAreaChange}
          ></textarea>
          {country}
          <select name="country" onChange={handleSelectedChange}>
            <option value="vietnam">VN</option>
            <option value="usa">USA</option>
            <option value="eng">UK</option>
          </select> */}
    </div>
  );
};

export default Form2;
