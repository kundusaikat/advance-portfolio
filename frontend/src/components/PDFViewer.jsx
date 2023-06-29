import React from "react";
import pdfFile from "../assets/pdf/SaikatKunduResume.pdf";

export const PDFViewer = () => {
  

  return (
    <div className="w-full aspect-w-16 aspect-h-9 flex flex-col justify-center items-center">
      <iframe src={pdfFile} title="PDF Viewer" className=" max-w-3xl aspect-[50/74] " style={{width:"100%"}} fitToWidth allowFullScreen />
      <p className="text-center">
        If you cannot view the PDF, you can{" "}
        <a href={pdfFile} target="_blank" rel="noopener noreferrer" className="text-sky-400 underline underline-offset-2 ">
          click here to download the PDF file
        </a>
        .
      </p>
     
    </div>
  );
};
