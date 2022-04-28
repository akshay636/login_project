import React from 'react';
import {Navigate} from 'react-router-dom'

const Protected = (props) => {
    const auth=JSON.parse(localStorage.getItem('auth'))
    console.log('ffffffffff',auth);
  return (
    <div>
   {auth?<props.cmp/>:<Navigate to="/"></Navigate>}
    </div>
  );
}

export default Protected;
