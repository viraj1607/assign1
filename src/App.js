import {Component} from "react";
import Func from "./components/func"
import Clss from "./components/clss";



class App extends Component{
  state={
    cls:false,
    func:false,
  };
  render(){
    return(
      <div className="App">
        <h1 className="heading"> Styling using Functional and Class Component</h1>
        <div className="flex">
          <button className="btn1" onClick={() => {
            if (this.state.cls === false)
              this.setState({ cls: true });
            if (this.state.cls)
              this.setState({ cls: false });
          }}
          >To see styling in class component</button>
          <button className="btn2" onClick={() => {
            if (this.state.func === false)
              this.setState({ func: true });
            if (this.state.func)
              this.setState({ func: false });
          }}>To see styling in functional component</button>
        </div>
        <div className="flex">
          <div style={{ visibility: this.state.cls? "visible" : "hidden" }}>
            <Clss />
          </div>
          <div style={{ visibility: this.state.func ? "visible" : "hidden" }}>
            <Func />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
