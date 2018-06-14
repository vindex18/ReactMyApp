import React, {Component} from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          value: null,
        };
    }
    render(){
        return(
            <button onClick={() => this.setState({value:'X'}) } className="square">
                { this.state.value }
            </button>
        );
    }
        
    }

export default Square;