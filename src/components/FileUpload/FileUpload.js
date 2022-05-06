import React, { useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";
import * as style from "./styles";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
      });

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
  };

  return (
    <style.mainContainer>
      {message ? <Message msg={message} /> : null}
      <style.formDiv onSubmit={onSubmit}>
        <style.uploadContainer>
          <style.fileImg src="/images/common/fileIcon.png" />
          <style.fileText>Drag & Drop a File Here</style.fileText>
          <style.fileLabel for="customFile" onChange={onChange}>
            <p style={{ marginBlock: "0" }}>Or</p>
            <p
              style={{ color: "#3CB371", marginLeft: "7px", marginBlock: "0" }}
            >
              Click Here to Add Your Files
            </p>
          </style.fileLabel>
          <style.fileInput
            type="file"
            className="custom-file-input"
            id="customFile"
          />
        </style.uploadContainer>
        <style.fileName>
          <style.fileIcon src="/images/common/fileIcon.png" />
          {filename}
        </style.fileName>

        <Progress percentage={uploadPercentage} />

        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </style.formDiv>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
          </div>
        </div>
      ) : null}
    </style.mainContainer>
  );
};

export default FileUpload;
