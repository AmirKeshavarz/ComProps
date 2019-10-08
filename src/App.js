import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import Table from './Table';
/*import Table2 from './Table2'*/
import './App.css';



  /*const e=React.createElement;
  class LikeButton extends Component{
    constructor(props){
      super(props);
      this.state={liked:false};
    }
    render(){
      if(this.state.liked){
        return 'You liked this.';
      } 
      return e(
        'button',
        {onClick :() => this.setState({liked:true})},
        'Like'
      );
    }
  }
class App1 extends Component{
  render(){
    return(
      <div className="App1">
        <Table/>
       
        <header className="App1-header">
        <h1 className="App1-h1">Hello World!</h1>
        <h2 className="App1-h2">Hello, React</h2>
        <p>Welcome</p>
        </header>
      </div>
    );
  }
}
/*const name = "Ali";
const Heading = <h1>Hello,{name}</h1>;
     return e(
      <button onClick={() => this.setState({liked ;true})}>
      Like
      </button>
    ); 
    
    ReactDOM.render(e(LikeButton),document.getElementById('root1'));*/
    class App2 extends Component{
      render(){
const Chracters = [
  {
    name :"Charlie",
  job :"Janitor",
},
  {name :"Mac",
  job :"Bouncer",
},
  {name:"Dee",
  job:"Aspring actress",
},
  {name:"Dennis",
  job:"Bartender",
},
]
return (
  <div className ="container">
    <Table characterData={Chracters} />
  </div>
)
}
    }
    
    
    
    
    
    
   // export default App1;

export default App2;