import React, { useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import * as style from "./styles";
import resumeAPI from "../../api/resumeAPI";

const FileUpload = () => {
  const [file, setFile] = useState([]);
  const [filename, setFilename] = useState("No File Choose");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    console.log(
      "e.target.files[0]",
      e.target.files[0],
      "e.target.files[0].name",
      e.target.files[0]
    );
    // setFile(e.target.files[0]);
    // setFilename(e.target.files[0].name);
    setFile(e.target.files);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("file", file[i]);
    }
    // formData.append("file", file);
    await resumeAPI
      .insertResume({
        file: file,
      })
      .then((res) => {
        setFile(res.data.data);
        console.log("insertResume result", res.data);
      })
      .catch((error) => {
        console.log("insertResume error", error);
        setUploadPercentage(0);
      });

    // try {
    //   const res = await axios.post("/insertResume", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     onUploadProgress: (progressEvent) => {
    //       setUploadPercentage(
    //         parseInt(
    //           Math.round((progressEvent.loaded * 100) / progressEvent.total)
    //         )
    //       );
    //     },
    //   });

    //   // Clear percentage
    //   setTimeout(() => setUploadPercentage(0), 10000);

    //   const { fileName, filePath } = res.data;
    //   setUploadedFile({ fileName, filePath });
    //   setMessage("File Uploaded");
    // } catch (err) {
    //   if (err.response.status === 500) {
    //     setMessage("There was a problem with the server");
    //   } else {
    //     setMessage(err.response.data.msg);
    //   }
    //   setUploadPercentage(0);
    // }
  };

  return (
    <style.mainContainer>
      {message ? <Message msg={message} /> : null}
      <style.formDiv onSubmit={onSubmit}>
        <style.uploadContainer>
          <style.fileImg src="/images/common/fileIcon.png" />
          <style.fileText>Uploading Resume Here</style.fileText>
          <style.fileLabel for="customFile" onChange={onChange}>
            <p
              style={{ color: "#3CB371", marginLeft: "7px", marginBlock: "0" }}
            >
              Click Here
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
