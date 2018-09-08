import React from 'react';
import clasess from './BackDrop.css';
const backDrop=(props)=>(
    props.show ? <div className={clasess.Backdrop} onClick={props.clicked}></div>:null
);
export default backDrop;