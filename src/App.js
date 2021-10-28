import React, { useState } from "react";
import Container from "./components/container";
import Total from "./components/Total";

const App = () => {
  const initialFormData = Object.freeze({
    tierLevel: "",
    rawLevel: "",
    gender: "",
    breedings: "",
    reset: "",
    courser: "",
    skills: [],
  });

  const [formData, setFormData] = useState(initialFormData);

  return (
    <div className="appContainer">
      <Container setFormData={setFormData} formData={formData} />
      <Total formData={formData} />
    </div>
  );
};

export default App;
