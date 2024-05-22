import React, { useState } from "react";
import './Form.css'

function Form() {
  const initialData = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear the form data after submission
    setInputData(initialData);
    console.log("data (cleared):", inputData); // Log the cleared data
  };

  const handleData = (e) => {
    setInputData({...inputData,[e.target.name]: e.target.value,});
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="header">
        <h1>Registration Form</h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={inputData.name}
          onChange={handleData}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter Your Email"
          name="email"
          value={inputData.email}
          onChange={handleData}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={inputData.password}
          onChange={handleData}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;