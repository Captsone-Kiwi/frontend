import React, { useEffect, useState, useContext } from "react";

function PdfView(props) {
  // const [embedURL, setEmbedURL] = useState(
  //   `http://localhost:8000/getResume?name=${props.name}`
  // );
  // return <iframe src={embedURL} width="400px" height="100%"></iframe>;

  useEffect(() => {
    getSelectedName();
  }, []);
  const resume_name = props.filename.split(".");
  const [pdfName, setPdfName] = useState("");
  const getSelectedName = () => {
    if (resume_name[0] === props.selectedName) {
      setPdfName(props.selectedName);
    }
  };
  console.log("pdfName", pdfName);

  const [embedURL, setEmbedURL] = useState(
    `http://35.174.145.15:8000/getResume?name=${pdfName}`
  );

  return <iframe src={embedURL} width="340px" height="100%"></iframe>;
}

export default PdfView;
