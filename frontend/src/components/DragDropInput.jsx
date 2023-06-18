import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { RiCloseLine } from "react-icons/ri";
import { popupWarning } from "../functions/toasts";
import { v4 as uuid } from "uuid";

export const DragDropInput = () => {
  const [files, setFiles] = useState([]);
  const maxFileSize = 15 * 1024 * 1024; // 15 MB

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      const validFiles = acceptedFiles.filter(
        (file) =>
          file.type.startsWith("image/") ||
          file.type.startsWith("video/") ||
          file.type.startsWith("audio/") ||
          file.type === "application/pdf" ||
          file.name.endsWith(".zip") ||
          file.name.endsWith(".fig")
      );

      if (validFiles.length < acceptedFiles.length) {
        popupWarning("Add only zip,pdf,image files");
      }

      const totalSize = validFiles.reduce((acc, file) => acc + file.size, 0);

      if (totalSize > maxFileSize) {
        popupWarning("Total size exceeded 15MB");
        return;
      }

      const filesWithId = validFiles.map((file) => ({
        id: uuid(),
        file: file,
      }));

      setFiles([...files, ...filesWithId]);
    },
    // eslint-disable-next-line
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleDelete = (id) => {
    const updatedFiles = files.filter((file) => file.id !== id);
    setFiles(updatedFiles);
  };

  const totalSizeInMB =
    files.reduce((acc, file) => acc + file.file.size, 0) / (1024 * 1024);

  return (
    <>
      <div
        className="w-full flex justify-center flex-col items-center bg-gray-300 rounded-3xl p-2 outline-double outline-8  outline-black  -outline-offset-8"
        {...getRootProps()}
      >
        <input {...getInputProps()} multiple/>
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <>
            <p>
              Drag and drop files here or{" "}
              <span className="text-blue-900 underline cursor-pointer">
                click to upload
              </span>
              .
            </p>
            <p>Supported file types are pdf Images zip fig</p>
          </>
        )}
        
        {files.length > 0 && (
          <p className="text-green-500">
            Total files: {files.length}, Total size: {totalSizeInMB.toFixed(2)}{" "}
            MB
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        {files?.map((el) => (
          <div
            className="border relative border-gray-500 pl-3 rounded-2xl flex items-center gap-1"
            key={el.id}
          >
            {el.file.name}
            <span
              className="cursor-pointer hover:bg-gray-300 rounded-full overflow-hidden p-1"
              onClick={() => handleDelete(el.id)}
            >
              <RiCloseLine />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
