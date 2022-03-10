import React from "react";


const Person = props => {

    const {fName,lName,age,hColor} = props;

    return (
        <>
        <h1>{lName}, {fName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color {hColor}</p>
        </>
    );
}

export default Person;