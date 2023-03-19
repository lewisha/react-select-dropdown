import "./styles.css";
import React from "react";
import Select from "react-select";

export default function App() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];

  const MyComponent = () => <Select options={options} />;
  return (
    <div className="App">
      <h1>your options</h1>
      <Select options={options} />
    </div>
  );
}
