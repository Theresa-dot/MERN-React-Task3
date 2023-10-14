import { Component } from "react";
import "./style.css";

export class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  changeColor=(event)=>{
    const main1=document.getElementById("main1");
    main1.style.backgroundColor=this.props[event.target.id];
    console.log(this.props[event.target.id]);
    this.setState({toggle:false});
}

handleClick=()=>{
    this.setState(
        {toggle:true}
    );
}

  render() {
    return (
        <div id="main1">
          <h1>Color Picker</h1>
          {this.state.toggle ? (
              <div id="main">
                <div className="square" style= {{backgroundColor:this.props.color1}} id="color1" onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color2}} id="color2"  onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color3}}  id="color3"onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color4}} id="color4"  onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color5}} id="color5" onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color6}} id="color6" onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color7}} id="color7" onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color8}} id="color8" onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color9}} id="color9" onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color10}} id="color10" onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color11}} id="color11" onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color12}} id="color12" onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color13}} id="color13" onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color14}} id="color14" onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color15}} id="color15" onClick={this.changeColor}></div>
                <div className="square" style={{backgroundColor:this.props.color16}} id="color16" onClick={this.changeColor}></div>
              </div>
          

            
          ) :  <div></div>}

          <button onClick={this.handleClick}>Show Color Pallete</button>
        </div>
    );
  }
}
