import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterCon from './containers/counter-container.js';

class App extends React.Component{
    render(){
        return(
<div>
    <CounterCon></CounterCon>
  
</div>


        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


