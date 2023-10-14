import React from 'react';
import moment from "moment";
import { Component } from 'react';

export class Clock extends Component {
    constructor (props) {
        super(props);
        this.state = {time: this.getTime(this.props.zone)}
        
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setState({ time: this.getTime(this.props.zone)}), 1000);
    }

    omponentWillUnmount() {
        clearInterval(this.timer);
    }
//     moment().add(Number, String)
//     Число: Это число, которое обозначает значение времени, которое необходимо добавить.
//     Строка: Это строка, которая обозначает единицу времени, которую необходимо добавить.

    getTime(zone) {
        const h = (moment().utc().add(zone,'hours').hours() < 10) ? `0${moment().utc().add(zone,'hours').hours()}` : moment().utc().add(zone,'hours').hours(); //moment().utc() используется для указания того, что часовой пояс данного объекта Moment будет отображаться как UTC. UTC() Статический метод принимает параметры, представляющие компоненты даты и времени, аналогичные Date конструктору, но обрабатывает их как UTC.
        const m = (moment().utc().add(zone,'minutes').minutes() < 10) ? `0${moment().utc().add(zone,'minutes').minutes()}` : moment().utc().add(zone,'minutes').minutes();
        const s = (moment().utc().add(zone,'seconds').seconds() < 10) ? `0${moment().utc().add(zone,'seconds').seconds()}` : moment().utc().add(zone,'seconds').seconds();
        return {h, m, s};
    }

    render() { //отрисовывает часы
        return (
            <li className='clock'>
                <p className='clock__name'>{this.props.name}</p> 
                <p className='clock__time'>{this.state.time.h}:{this.state.time.m}:{this.state.time.s}</p>
                <button className='close__btn' onClick={() => this.props.onDelete(this.props.id)}>X</button>   
            </li>
        )
    }
}