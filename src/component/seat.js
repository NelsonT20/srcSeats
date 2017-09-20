import React, { Component } from 'react';
import '../style/style.css';

export default class Seat extends Component {
    render(){
        return(
            <div className="seat" id={this.props.number} onClick={this.props.onClick}>
                {this.props.text}
            </div>
        );
    }


}