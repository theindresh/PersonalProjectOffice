import React, { Component } from "react";


class Counter1 extends Component {
    constructor() {
        super()
        this.state = {
            count:0
        }
    }

    increment = () =>{
        this.setState(poststate =>({
            count:poststate.count + 1
        }))
    }

   decrement = () =>{
    this.setState(prestate =>({
        count:prestate.count - 1
    }))
   }

   render(){
    return(
        <div style={{display:"flex",justifyContent:"space-between",width:"50%",margin:"150px"}}>
            <p style={{width:"100px",height:"50px",background:"black",color:"white"}}>count:{this.state.count}</p>
             <button onClick={this.increment} style={{width:"50px",height:"50px",background:"black",color:"white"}}>+1</button>
             <button onClick={this.decrement} style={{width:"50px",height:"50px",background:"black",color:"white"}}>-1</button>
        </div>
    )
   }
}
  export default Counter1 ;
