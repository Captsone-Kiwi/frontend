import React, { useEffect, useState, useContext } from 'react';

function Sample(props) {
  // EDIT
  const [embedURL, setEmbedURL] = useState(
    `http://[API Server IP]:8000/getResume?name=${props.name}`
  );
  return <iframe src={embedURL} width="400px" height="100%"></iframe>;

  // return (
  //     <iframe src={embedURL} width="400px" height='100%'></iframe>
  // )
}

export default Sample;
