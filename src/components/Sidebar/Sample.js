import React, { useEffect, useState, useContext } from 'react';

function Sample(props) {
  

  const [embedURL, setEmbedURL] = useState(`http://35.174.145.15/getResume?name=${props.name}`)

  return (
      <iframe src={embedURL} width="400px" height='100%'></iframe>
  )
}

export default Sample;
