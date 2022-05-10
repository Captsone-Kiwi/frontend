import React, { useEffect, useState, useContext } from 'react';
import ResumeAPI from "../../api/ResumeAPI";

function Sample(props) {
  

  const [embedURL, setEmbedURL] = useState(`http://localhost:8000/getResume?name=${props.name}`)

  return (
      <iframe src={embedURL} width="400px" height='100%'></iframe>
  )
}

export default Sample;
