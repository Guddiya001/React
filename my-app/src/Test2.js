import React, { Component } from 'react'
//const data2 = 'jsxjhsdfjgsdfgsjkgsdbsdbfkhsd   sdfsdhf sd fjsd sdfsdf  fsdfsd fjsdfsf s ff sif';

class Test2 extends Component {
 
    render() {
        return (

            <div className = "row">
            <div className = "col-md-12" >

            <div className = "col-md-6" >
            <h1> Logo image </h1>

            </div> <div className = "col-md-6">
            <ul className = "dropdown-menu">
            <li>Home</li><li>Product </li> <li> About </li> <li> Contanct Us </li>   </ul>

            <button type = "button"
            className = "btn btn-primary">hello Button</button>


            <button type = "button" className = "btn btn-success text-white">
            <span className = "glyphicon glyphicon-align-left" >hello Button</span> </button>
            </div> </div>
            </div>

        );
    }

}







export default Test2;