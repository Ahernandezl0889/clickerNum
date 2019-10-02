// when i click the buttom will generate a random number % 1-10
import React from 'react'


export default class Clicker extends React.Component{
    constructor(props){
        super(props)
        
        // initialize state, starting in 1
        // this.state is an object
        this.state ={num:1}
        // binding the randomNum fucntion to (this)
        this.randomNum = this.randomNum.bind(this);
    }
// function that will generate the random number;
    randomNum(e){

        // generating a random number
        let newNum= Math.floor(Math.random() * 10) + 1;
        // updating the state, num now will take the random number saves in newNum
        // num : newNum means (num = newNum)
        this.setState({num:newNum});
    }

render(){
    return(
        <div>
            {/* it will display the starting number and when the button is clicked will display the new Number */}
            <h1>Number: {this.state.num}</h1>

            {/* because we use a boolean and when the state.num equal to 7 is true the other part is also true and it will be displayed */}
             {this.state.num ===7 &&<h2>YOU WIN!</h2>}

            {/* if this.state.num equal to 7 display You Win otherwise Display You lost */}
            {/* <h2>{this.state.num ===7 ? 'You Win!' : 'You Lost!'}</h2> */}

            {/* when the button is clicked, it will call the function */}
            <button onClick={this.randomNum}>Random Number</button>
        </div>
    )
}




}