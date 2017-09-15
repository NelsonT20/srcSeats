import React, { Component } from 'react';
import Seat from './seat';
import '../style/style.css';

export default class Seats extends Component {
    constructor() {

        super()

        this.state = {
            status: false,
            child: [
                { childText: "Asiento 1!", childNumber: 1, status: false },
                { childText: "Asiento 2!", childNumber: 2, status: false },
                { childText: "Asiento 3!", childNumber: 3, status: false },
                { childText: "Asiento 4!", childNumber: 4, status: false },
                { childText: "Asiento 5!", childNumber: 5, status: false }
            ]
        }
    }

    

    handleSeatClick(seatData,event) {
        if (seatData.childNumber === 1) {
            console.log('entro en el asiento 1',seatData.status);
        }
        console.log('entro en el div ', event.target.outerHTML)
        // alert("The Child button data is: " + childData.childText + " - " + childData.childNumber);
        // alert("The Child HTML is: " + event.target.outerHTML);
    }

    render() {
        let children = this.state.child.map(function(seatData,seatIndex) {
            return <Seat key={seatIndex} onClick={this.handleSeatClick.bind(null,seatData)} text={seatData.childText}/>;
        }.bind(this));
        return (
            <div>{children}</div>
        );
    }

}