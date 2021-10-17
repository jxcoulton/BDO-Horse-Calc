import React, { useState } from "react";
import Container from "./components/container";
import Total from "./components/Total";

function App() {
	const initialFormDate = Object.freeze({
		tierLevel: "",
		rawLevel: "",
		gender: "",
		breedings: "",
		reset: "",
		courser: "",
		skills: [],
	});

	const [formData, setFormData] = useState(initialFormDate);

	return (
		<div>
			<Container setFormData={setFormData} formData={formData} />
			<Total formData={formData} />
		</div>
	);
}

export default App;
