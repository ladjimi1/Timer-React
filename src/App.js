import React from 'react';
import './App.css';

class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      timer:0,
      test:true
    }
    
  }
Start =()=>{
  const interval=setInterval(
    ()=>{
      this.setState({
        timer:this.state.timer + 1000
      })
    },
    1000
  );
  this.setState({int:interval})
}


reset=()=>{
  this.setState({
    timer:0,
    test: false
})
}
pause=()=>{
  this.setState({
    int:false
  })
   clearInterval(this.state.int)  
  
}




    render(){
      const hours = Math.floor((this.state.timer / 3600000) % 24)
      const minutes = Math.floor((this.state.timer / 60000) % 60)
      const seconds =Math.floor((this.state.timer / 1000) % 60)
      return(
        <div className="ctr">
            <div className="min">
    <h1>Hours: {String(hours).padStart(2, '0')}</h1>
    <h1>Minutes: {String(minutes).padStart(2, '0')}</h1>
    <h1>Seconds: {String(seconds).padStart(2, '0')}</h1>
    </div>
    <div className="btr">
      <button className="btn" type="button" onClick={this.state.int ?this.pause:this.Start}>{this.state.int ?'pause':'start'}</button>
    <button className="btn" type="button" onClick={this.reset}>Reset</button>
    </div>
        </div>
    
    
    
      
      )
    };
  }


export default Timer;
