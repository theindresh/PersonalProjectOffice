import React from "react";


const Child = (props) =>{
    return (
        <>
         <p style={{color:"red"}}>My name is {props.name}, my age is {props.age}</p>
        </>
    )
}


export default Child;