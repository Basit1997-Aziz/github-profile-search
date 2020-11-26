import React from 'react';

class FirstDiv extends React.Component{
  constructor(){
    super();
    this.state = {value: ""};
  }
  MyFunction = () => {
    alert(this.state.value);
  }
  ValueUpdate = (event) => {
    this.setState({value: event.target.value});
  }

  render(){
   return(
     <div>
       <h1>{this.props.nameProp}</h1>
        <label>Name</label>
       <input type="text" onChange={this.ValueUpdate}/>
       <button onClick={this.MyFunction}>Submit</button>
     </div>
   )
  }
}

export default FirstDiv;