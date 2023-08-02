import {FaTimes , FaPen , FaRegCircle} from 'react-icons/fa';

// import React from 'react'

 function Icons({name}) {
 if(name=="Circle")
 return <FaRegCircle />
 else if( name == "cross"){
    return <FaTimes />

 }
 else{
    return <FaPen />
 }
}

export default Icons;