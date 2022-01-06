import React, { Component } from "react";

// // functional Component
export default function Home() {
    const red=()=>{
        alert("red function called")
    }
    return <div>
        <h1>Tap below Profile</h1>
        <h1 onClick={red}>Profile Component</h1>
    </div>
}


// // class function  
// class Home extends Component{
    
//  constructor(){
//      super()
//  }   
    
//     componentDidMount(){
//         console.warn("WildLife")
//         console.warn("WildFile")
//     }
    
//     render(){
//         return(
//             <div>
//                 <h1>Home Component</h1>
//                 <h2>Profile Component</h2>
//             </div>
//         )
//     }
// }

// export default Home