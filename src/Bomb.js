import React, { Component }  from 'react';
// your Bomb code here!

export default class Bomb extends Component {

    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render(){
        if (this.state.secondsLeft === 0){
            return <div>Boom!</div>
        }else{
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        }
    }
}

