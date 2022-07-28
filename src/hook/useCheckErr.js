import { useState } from "react";

export default function useCheckErr(initialValues) {
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (initialValues.fullname === "") {
      setNameError("Your fullname is empty");
    }
  };

  return {
    nameError,
    handleSubmitForm,
  };
}
