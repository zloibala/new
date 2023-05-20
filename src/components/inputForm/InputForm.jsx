import React, { useState } from "react";
import "./inputForm.style.css";

const InputForm = () => {
  const defaultValue = {
    fullName: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  };
  const [value, setValue] = useState(defaultValue);
  const [isClicked, setIsClicked] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    setIsClicked(true);
    if (passwordMatch === setPasswordMatch) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };
  return (
    <div className="container">
      <form className="form-container" onSubmit={OnSubmitHandler}>
        <h1> Sign Up Form</h1>
        <input
          placeholder="Full Name"
          type="text"
          name="fullName"
          onChange={onChangeHandler}
          value={value.fullName}
          required
        />
        <input
          placeholder=" Date of Birth"
          type="date"
          name="dateOfBirth"
          onChange={onChangeHandler}
          value={value.dateOfBirth}
          required
        />

        <input
          placeholder=" Password"
          type="password"
          name="password"
          onChange={onChangeHandler}
          value={value.password}
          required
        />

        <input
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={onChangeHandler}
          value={value.confirmPassword}
          required
        />

        <button type="Submit"> Submit</button>
        {!passwordMatch && <p>Passwords do not match</p>}
        {isClicked === true && <p> {`first name ${value.fullName}`} </p>}
        {isClicked === true && <p> {`DOB ${value.dateOfBirth}`} </p>}
        {isClicked === true && <p> {`Password ${value.password}`} </p>}
        {isClicked === true && (
          <p> {`Confirm Password ${value.confirmPassword}`} </p>
        )}
      </form>
    </div>
  );
};

export default InputForm;
