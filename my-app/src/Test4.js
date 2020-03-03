import React, { Component } from 'react'

const Test4 = (props) =>{
    console.log(props)

    return (
    <h1>{props.title}{ props.name} { props.age}</h1>
    )
    }

Test4.defaultProps = {
    age:'25'
}

    export default Test4;