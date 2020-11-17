import React, { Component } from "react";
import Stopwatch from './component/Stopwatch';




class App extends Component{

    render(){
        return(
            <div className="App">
                <div>
                    <Stopwatch/>
                </div>
            </div>
        )

    }

}
export default App;
