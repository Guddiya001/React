import React, { Component } from 'react';
import logo from './logo.svg';
import './bootstrap-theme.min.css';
import './App.css';
import test from './Test.js'
import Test2 from './Test2.js'
import Test3 from './Test3.js'


var data = {
    name: 'ashish',
    age: '20',
    class: 'ABC'
};


class App extends Component {

    render() {
        return (


            <div className = "App" >

            <Test2 />
            <Test3 />
          

            <header className = "App-header" >
            <h1> Ashish Kumar Singh Ji < /h1> <p> Name: { data.name } </p> <p> Age: { data.age } </p> <p> class: { data.class } </p>


            <form>
            <label htmlFor = "username" > username < /label>  <
            input type = "text"
            name = "username"
            value = { data.name } />  
            </form >

            <img src = { logo }
            className = "App-logo"
            alt = "logo" />
            <p> Edit <code> src /App.js </code> and save to reload. </p>
            <a className = "App-link"
            href = "https://reactjs.org"
            target = "_blank"
            rel = "noopener noreferrer" >
            Learn React <Ashish/> { test.greeting } </a>  

            <div className = "" > </div>
        <tagvalue/>
            </header>

            </div>
        );
    }

}


class Ashish extends Component {
    render() {

        return ( <h1 className = "Ashish"> Ashish Kumar Singh </h1>);

        }


    }

    export default App;