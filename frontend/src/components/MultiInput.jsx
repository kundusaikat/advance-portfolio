import React, { useState } from "react";

export const MultiInput = () => {
  const [inputs, setInputs] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const inputArray = inputValue.split(" ");
    setInputs(inputArray);
  };

  const handleDelete = (index) => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };

  const handleEdit = (index) => {
    const updatedInputs = [...inputs];
    const editedInput = prompt("Edit the link:", updatedInputs[index]);
    if (editedInput !== null) {
      updatedInputs[index] = editedInput;
      setInputs(updatedInputs);
    }
  };

  return (
    <div>
      <textarea
        value={inputs.join(" ")}
        onChange={handleInputChange}
        className="border border-black"
      />
      <div>
        {inputs.map((input, index) => (
          <div key={index}>
            <a href={input} target="_blank" rel="noopener noreferrer">
              {input}
            </a>
            <button onClick={() => handleDelete(index)}>X</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiInput;
