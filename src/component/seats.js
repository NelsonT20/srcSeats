import React, { Component } from 'react';
import '../style/style.css';

export default class Seats extends Component {
    constructor() {
        super()
        this.state = {
            status: false,
        };
    }

    changeColor(event) {
        if (!this.status) {
            this.status = true;
            event.currentTarget.style.backgroundColor = '#D70202';
        } else {
            this.status = false;
            event.currentTarget.style.backgroundColor = '#0CB607';
        }
    }

    render() {
        let array = [];
        for (var i = 0; i < 5; i++) {
            array[i] = i;
        }

        const list = array.map((d, index) => <div className="seat  fa fa-user fa-5x" onClick={this.changeColor.bind(this)} key={index}></div>);
        return (
            <div>
                {list}
            </div>
        );
    }
}