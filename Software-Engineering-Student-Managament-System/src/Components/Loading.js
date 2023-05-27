import React from 'react';

import { Triangle } from  'react-loader-spinner'

const Loading = () => {
  return (
    <div className="loading" style={{width:"200vh",height:"100vh",alignItems:"center",display:"flex",justifyContent:"center",background:"black"}}>
     <Triangle
  
  height="200"
  width="200"
  color="white"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
      {/* Add your loading spinner or content here */}
    </div>
  );
};

export default Loading;