import React, {Component} from "react";
import './Counter.css'



class Counter extends Component{

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment= this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="Counter">
                <CounterButton by={1} incrementMethod = {this.increment} decrementMethod= {this.decrement}/>
                <CounterButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                <CounterButton by={10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                <div>
                    <button className = "reset" onClick = {this.reset}>Reset</button>
                </div>

                <span className="count">{this.state.counter}</span>

            </div>
        );
    }
    reset(by){
        this.setState(
            (prevState)=>{
                return {counter: 0}
            });

    }// end reset

    increment(by){
        this.setState(
            (prevState)=>{
           return {counter: prevState.counter + by}
        });

   }// end increment
    decrement(by){
        this.setState(
            (prevState)=>{
                return {counter: prevState.counter - by}
            });

    }// end decrement
}

//***************************************************************************************
class CounterButton extends Component{
    constructor() {
        super();
        // this.state = {
        //     counter: 0
        // }
        // this.increment= this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }
    render ()  {
        return (
            <div className="CounterButton">
                <button onClick={() =>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() =>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    };// end render
}

export default Counter