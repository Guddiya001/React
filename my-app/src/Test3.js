import React, { Component } from 'react'
//const data2 = 'jsxjhsdfjgsdfgsjkgsdbsdbfkhsd   sdfsdhf sd fjsd sdfsdf  fsdfsd fjsdfsf s ff sif';

// class Test3 extends Component {

//     render() {
//         return (

//             <div className = "row">
//             <div className = "col-md-12" >

//             <div className = "col-md-6" >
//             <h1> Logo image < /h1>

//             </div> <div className = "col-md-6">
//             <ul className = "dropdown-menu">
//             <li>Home</li><li>Product </li> <li> About </li> <li> Contanct Us </li>   </ul>

//             <button type = "button"
//             className = "btn btn-primary">hello Button</button>


//             <button type = "button" className = "btn btn-success text-white">
//             <span className = "glyphicon glyphicon-align-left" >hello Button</span> </button>
//             </div> </div>
//             </div>

//         );
//     }

// }



class Test3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', color : "red", Name: "Ashish"  };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

 
  render() {
    const carinfo = {name: "Ford", model: "Mustang"};
    return (
      <form>
      <h1>Hello {this.state.username}</h1>
      <h1>color {this.state.color} Name {this.state.Name}</h1>
      <p>Enter your name:</p>
      <input type='text' onChange={this.myChangeHandler} />

      <h3>carinfo Name:  {carinfo.name}</h3>
      <h3>carinfo Model:  {carinfo.model}</h3>
     
      </form>
    );
  }
}


export default Test3;