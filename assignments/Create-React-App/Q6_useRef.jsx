import { useRef, useEffect,useState } from "react";

export const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Automatically focus the input when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Focusable Input</h1>
      <input ref={inputRef} type="text" placeholder="Auto focus on mount" />
    </div>
  );
};

export const UncontrolledInput = () => {
    const inputRef = useRef(null);
    const [value, setValue] = useState("");
  
    const handleInputChange = () => {
      // Update the value by accessing the current value of the input
      setValue(inputRef.current.value);
    };
  
    return (
      <div>
        <h1>Uncontrolled Input</h1>
        <input ref={inputRef} type="text" onChange={handleInputChange} placeholder="Type something" />
        <p>Current Value: {value}</p>
      </div>
    );
  };


  export const ChangeBackground = () => {
    const divRef = useRef(null);
  
    const handleClick = () => {
      // Change the background color of the referenced div element
      divRef.current.style.backgroundColor = divRef.current.style.backgroundColor === "red" ? "lightpink" : "red";
    };
  
    return (
      <div>
        <h1>Change Background Color</h1>
        <div
          ref={divRef}
          onClick={handleClick}
          style={{ width: "200px", height: "200px", backgroundColor: "lightpink", cursor: "pointer" }}
        >
          Click me to change background color
        </div>
      </div>
    );
  };