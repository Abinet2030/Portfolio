import { render } from "@testing-library/react";
import "./Bg2style.css"
import React, { Component} from 'react'


class Bg2 extends Component {
  render(){
  return (
    <div>
      <div className="hero-img">

        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    </div>
  );
}}


export default Bg2
