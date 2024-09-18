import React, { useState, useRef, useEffect } from 'react';


export const OtpInput = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputRefs = useRef([]);

  // Handle input change
  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedOtp = [...otp];
    if (/^\d$/.test(value)) {
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      // Move focus to the next input
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === '') {
      // Handle backspace
      updatedOtp[index] = '';
      setOtp(updatedOtp);
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Handle paste event
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('Text');
    if (/^\d{6}$/.test(pasteData)) {
      setOtp(pasteData.split(''));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    alert(`Entered OTP: ${otpString}`);
    console.log(`Entered OTP: ${otpString}`);
  };

  // Handle input box focus
  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="otp-form" onPaste={handlePaste}>
      <div className="otp-inputs">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            className="otp-input"
          />
        ))}
      </div>
      <button type="submit" disabled={otp.includes('')}>Submit</button>
    </form>
  );
};


