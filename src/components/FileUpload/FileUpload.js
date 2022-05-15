import React, { useState } from "react";
import Progress from "./Progress";
import * as style from "./styles";
import resumeAPI from "../../api/resumeAPI";
import axios from "axios";

function FileUpload() {
  const [file, setFile] = useState([]);
  // const [uploadedFile, setUploadedFile] = useState({});
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    const FileList = e.target.files;
    const files = Array.from(FileList);
    setFile(files);
  };
  console.log("file 저장", file);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("file", file[i]);
    }
    // formData.append("file", file);
    // await resumeAPI
    //   .insertResume({
    //     file: file,
    //   })
    //   .then((res) => {
    //     // setFile(res.data.data);
    //     console.log("insertResume result", res.data);
    //   })
    //   .catch((error) => {
    //     console.log("insertResume error", error);
    //     setUploadPercentage(0);
    //   });

    try {
      const res = await axios.post("/insertResume", formData, {
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
      // setTimeout(() => setUploadPercentage(0), 10000);
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
  };

  return (
    <style.mainContainer>
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
            <style.fileInput
              type="file"
              className="custom-file-input"
              id="customFile"
              multiple
            />
          </style.fileLabel>
        </style.uploadContainer>
        {file.length === 0 ? (
          <style.noFile>
            <style.fileIcon src="/images/common/fileIcon.png" />
            No File Choose
          </style.noFile>
        ) : (
          <>
            {file.map((e, idx) => (
              <style.fileName>
                <style.Left>
                  <style.fileIcon src="/images/common/fileIcon.png" />
                  {file[idx].name}
                </style.Left>
                <style.Right>
                  <input
                    type="submit"
                    value="Upload"
                    className="btn btn-primary btn-block mt-4"
                    style={{ width: "70px", height: "30px" }}
                  />
                  {/* <style.uploadBtn>Upload</style.uploadBtn> */}
                </style.Right>
              </style.fileName>
            ))}
          </>
        )}
        <Progress percentage={uploadPercentage} />
      </style.formDiv>
      {/* {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
          </div>
        </div>
      ) : null} */}
    </style.mainContainer>
  );
}

export default FileUpload;
