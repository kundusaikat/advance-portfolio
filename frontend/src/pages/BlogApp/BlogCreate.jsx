import React, { useEffect, useState } from "react";

export const BlogCreate = () => {
  const [content, setContent] = useState([]);
  const [formData, setFormData] = useState({ type: "", innerData: "" });

  const handleAdd = () => {
    setContent((prev) => [...prev, { ...formData }]);
    setFormData({ type: "", innerData: "" });
  };

  useEffect(() => {
    const mainDiv = document.createElement("div");
    for (let i = 0; i < content.length; i++) {
      let div;
      if (content[i].type === "Paragraph") {
        div = document.createElement("p");
        div.innerHTML = content[i].innerData;
      } else if (content[i].type === "Heading") {
        div = document.createElement("p");
        div.setAttribute("class","text-lg font-semibold")
        div.innerHTML = content[i].innerData;
      }
      else if (content[i].type === "Image") {
        div = document.createElement("img");
        div.setAttribute("class","w-40 h-40")
        div.src = content[i].innerData
      }

      if (div) {
        mainDiv.append(div);
      }
    }
    document.querySelector("#mainDiv").innerHTML = "";
    document.querySelector("#mainDiv").append(mainDiv);
  }, [content]);

  return (
    <>
      <div className="w-full">
        <p className="text-2xl text-center">Welcome to blog creation page</p>

        <div id="mainDiv"></div>

        <div className="fixed top-0 right-0 h-screen bg-black w-40 text-white text-center">
          <p>Add segments</p>
          <button
            className="border p-1"
            onClick={() => setFormData({ type: "Paragraph", innerData: "" })}
          >
            Paragraph {"<p>"}
          </button>
          <button
            className="border p-1"
            onClick={() => setFormData({ type: "Heading", innerData: "" })}
          >
            Heading {"<h3>"}
          </button>
          <button
            className="border p-1"
            onClick={() => setFormData({ type: "Image", innerData: "" })}
          >
            Image {"<img>"}
          </button>
        </div>
      </div>
      <div
        className="fixed bottom-0 left-0 h-20 bg-black text-white"
        style={{ width: "calc(100vw - 160px)" }}
      >
        <p>Type: {formData.type}</p>
        <input
          className="text-black"
          type="text"
          placeholder="Enter your data here..."
          value={formData.innerData}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, innerData: e.target.value }))
          }
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
};
