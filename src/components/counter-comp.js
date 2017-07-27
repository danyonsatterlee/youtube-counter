import React from 'react';

class Counter extends React.Component{
    render(){
        return(
<div>
    <h1>This is a Counter</h1>
    <h2>{this.props.number}</h2>
    <button onClick= {() => {this.props.handleUp(); }}>up</button>
    <button onClick={() => {this.props.handleDown(); }}>down</button>
</div>
        );
    }
}

export default Counter;