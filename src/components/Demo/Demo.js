import React from 'react'
import PropTypes from 'prop-types';
import "./Demo.css"
const Demo = ({ step }) => {
  const steps = ["Basic details", "Address", "Payment", "Confirm", "Done"];
  const index = steps.indexOf(step);

  return (
    <div className="progress-bar">
      {steps.map((stepName, i) => (
        <div
          key={stepName}
          className={`progress-bar-step ${i <= index ? "active" : ""}`}
        >
          {stepName}
        </div>
      ))}
    </div>
  );
};

Demo.propTypes = {
  step: PropTypes.oneOf([
    "Basic details",
    "Address",
    "Payment",
    "Confirm",
    "Done"
  ]).isRequired
};

export default Demo;