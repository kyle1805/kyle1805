import React from "react";
import { useState } from "react";

const Form = () => {
  // const [fullname, setFullName] = useState();
  // const [message, setMessage] = useState();
  // const [country, setCountry] = useState();
  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  //   setFullName(event.target.value);
  // };

  // const handleTextAreaChange = (event) => {
  //   setMessage(event.target.value);
  // };

  // const handleSelectedChange = (event) => {
  //   setCountry(event.target.value);
  // };
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    hobby: false,
  });

  const handleInputChange = (e) => {
    const type = e.target.type;

    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        {/* {fullname} */}
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
          placeholder="Enter your name "
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
          placeholder="Enter your Email"
          onChange={handleInputChange}
        />
        <input type="checkbox" name="hobby" onChange={handleInputChange} />
      </div>
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

export default Form;
