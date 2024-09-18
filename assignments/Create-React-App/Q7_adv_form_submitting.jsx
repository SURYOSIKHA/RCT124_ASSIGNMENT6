import React, { useRef,useState } from "react";

export const DynamicForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const focusInput = (inputRef) => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Dynamic Form Input Focus</h1>
      <form>
        <div>
          <label>Name: </label>
          <input ref={nameRef} type="text" placeholder="Enter name" />
          <button type="button" onClick={() => focusInput(nameRef)}>Focus Name</button>
        </div>
        <div>
          <label>Email: </label>
          <input ref={emailRef} type="email" placeholder="Enter email" />
          <button type="button" onClick={() => focusInput(emailRef)}>Focus Email</button>
        </div>
        <div>
          <label>Password: </label>
          <input ref={passwordRef} type="password" placeholder="Enter password" />
          <button type="button" onClick={() => focusInput(passwordRef)}>Focus Password</button>
        </div>
      </form>
    </div>
  );
};


export const RealTimeValidationForm = () => {
    const nameRef = useRef(null);
    const [nameError, setNameError] = useState("");
  
    const validateName = () => {
      const name = nameRef.current.value;
      if (name.length < 3) {
        setNameError("Name must be at least 3 characters long.");
      } else {
        setNameError("");
      }
    };
  
    return (
      <div>
        <h1>Real-time Input Validation</h1>
        <form>
          <div>
            <label>Name: </label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Enter name"
              onChange={validateName}
            />
            {nameError && <p style={{ color: "red" }}>{nameError}</p>}
          </div>
        </form>
      </div>
    );
  };

  export const CustomFormSubmission = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [formMessage, setFormMessage] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
  
      if (name && email && password) {
        // Perform custom processing here
        setFormMessage("Form submitted successfully!");
      } else {
        setFormMessage("Please fill in all fields.");
      }
    };
  
    return (
      <div>
        <h1>Custom Form Submission Handling</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input ref={nameRef} type="text" placeholder="Enter name" />
          </div>
          <div>
            <label>Email: </label>
            <input ref={emailRef} type="email" placeholder="Enter email" />
          </div>
          <div>
            <label>Password: </label>
            <input ref={passwordRef} type="password" placeholder="Enter password" />
          </div>
          <button type="submit">Submit</button>
        </form>
        {formMessage && <p>{formMessage}</p>}
      </div>
    );
  };