import React, { Component } from 'react';
import Seat from './seat';
import '../style/style.css';

export default class Seats extends Component {
    constructor(props) {
        super(props)

        this.state = {
            childrens: [
                { childText: "Asiento 1!", childNumber: 1, status: false },
                { childText: "Asiento 2!", childNumber: 2, status: false },
                { childText: "Asiento 3!", childNumber: 3, status: false },
                { childText: "Asiento 4!", childNumber: 4, status: false },
                { childText: "Asiento 5!", childNumber: 5, status: false }
            ]
        }

        this.handleSeatClick = this.handleSeatClick.bind(this);
    }

    handleSeatClick(seat, event) {
        let a = document.getElementById("1")
        let b = document.getElementById("2")
        let c = document.getElementById("3")
        let d = document.getElementById("4")
        let e = document.getElementById("5")


        if (seat.childNumber === 1) {
            console.log('entro en el asiento ', seat.childNumber);
            if (!seat.status) {
                seat.status = true;
                event.currentTarget.style.backgroundColor = '#D70202';
                b.style.display = 'none';
                c.style.display = 'none';
                d.style.display = 'none';
                e.style.display = 'none';
            } else {
                b.style.display = 'block';
                c.style.display = 'block';
                d.style.display = 'block';
                e.style.display = 'block';
                seat.status = false;
                event.currentTarget.style.backgroundColor = '#0CB607';
            }
        } else if (seat.childNumber === 2) {
            if (!seat.status) {
                seat.status = true;
                event.currentTarget.style.backgroundColor = '#D70202';
                a.style.display = 'none';
                c.style.display = 'none';
                d.style.display = 'none';
                e.style.display = 'none';
            } else {
                a.style.display = 'block';
                c.style.display = 'block';
                d.style.display = 'block';
                e.style.display = 'block';
                seat.status = false;
                event.currentTarget.style.backgroundColor = '#0CB607';
            }

        } else if (seat.childNumber === 3) {
            if (!seat.status) {
                seat.status = true;
                event.currentTarget.style.backgroundColor = '#D70202';
                a.style.display = 'none';
                b.style.display = 'none';
                d.style.display = 'none';
                e.style.display = 'none';
            } else {
                a.style.display = 'block';
                b.style.display = 'block';
                d.style.display = 'block';
                e.style.display = 'block';
                seat.status = false;
                event.currentTarget.style.backgroundColor = '#0CB607';
            }
        } else if (seat.childNumber === 4) {
            if (!seat.status) {
                seat.status = true;
                event.currentTarget.style.backgroundColor = '#D70202';
                a.style.display = 'none';
                b.style.display = 'none';
                c.style.display = 'none';
                e.style.display = 'none';
            } else {
                a.style.display = 'block';
                b.style.display = 'block';
                c.style.display = 'block';
                e.style.display = 'block';
                seat.status = false;
                event.currentTarget.style.backgroundColor = '#0CB607';
            }
        } else if (seat.childNumber === 5) {
            if (!seat.status) {
                seat.status = true;
                event.currentTarget.style.backgroundColor = '#D70202';
                a.style.display = 'none';
                b.style.display = 'none';
                d.style.display = 'none';
                c.style.display = 'none';
            } else {
                a.style.display = 'block';
                b.style.display = 'block';
                d.style.display = 'block';
                c.style.display = 'block';
                seat.status = false;
                event.currentTarget.style.backgroundColor = '#0CB607';
            }
        }
    }

    render() {
        let seat = this.state.childrens.map(function (seat, numberIndex) {
            return <Seat key={numberIndex} number={seat.childNumber} onClick={this.handleSeatClick.bind(null, seat)} text={seat.childText} />;
        }.bind(this));
        return (
            <div>{seat}</div>
        );
    }

}