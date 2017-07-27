import React from 'react';
import Counter from '../components/counter-comp.js'
class CounterCon extends React.Component{
    constructor(){
        super();
        this.state={number:0};
        this.up=this.up.bind(this);
        this.down=this.down.bind(this);

    }

    up(){
        this.setState({
            number: this.state.number+1
        });
    }

    down(){
        this.setState({
            number:this.state.number-1
        });
    }

    render(){
        return(
<div>
    <Counter handleUp={this.up} handleDown={this.down} number={this.state.number}></Counter>
</div>
        );
    }
}

export default CounterCon;