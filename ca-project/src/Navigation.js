import React from "react";
import {Link} from 'react-router-dom';

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter: 1};

        this.increseCounter = this.increseCounter.bind(this);
        this.decreaseCounter = this.decreaseCounter.bind(this);
    }
    render(){
        return (
                <h1>
                   <p> This is Navigation Component.</p>
                   <p> My properties are {this.props.name}.</p>
                   <p>My state is :{this.state.counter}</p>
                   <button onClick = {this.increseCounter}>
                        Click here to increase counter
                   </button>
                   
                   <button onClick = {this.decreaseCounter}>
                        Click here to decrease counter
                   </button>
                   <nav>
        <Link to="/">Home</Link>
      </nav>
               </h1>
               )}

               increseCounter(){
                this.setState(prevState => ({
                    counter: prevState.counter+1
                }))
            }
        
            decreaseCounter(){
                this.setState(prevState => ({
                    counter: prevState.counter-1
                }))
            }

}

export default Navigation;