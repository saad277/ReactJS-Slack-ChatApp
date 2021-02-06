import React from "react";

export const displayErrors = (errors) => {
  return errors.map((err, i) => {
    return <p>{err.message}</p>;
  });
};

export const handleInputError = (errors, inputName) => {
  return errors.some((error) => {
    if (error.message.toLowerCase().includes(inputName)) {
      return "error";
    } else {
      return "";
    }
  });
};
