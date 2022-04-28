import React, { useEffect, useState } from 'react';



const Sample = () => {
  const [embedURL] = useState('https://drive.google.com/viewerng/viewer?embedded=true&url=http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&scrollbar=0')

  return (
      <iframe src={embedURL} width="400px" height='100%'></iframe>
  )
}

export default Sample;
