import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db:"mongo/",
      spam:""
    };
  }
  singleGet(){
    var start=(new Date()).getTime();
    axios.get("/sdc/"+this.state.db+"data/"+Math.floor(Math.random()*10000000)).then(
      data => {
        var time=(new Date()).getTime()-start;
        console.log("serverRespond for Get: "+time+"ms");
      },
      err => console.error(err)
    );
  }
  multiGet(){
    var round=Number(document.getElementById("spam").value);
    var count=0;
    var time=0;
    for(var i=0;i<round;i++)
      setTimeout(() => {
        axios.get("/sdc/"+this.state.db+"data/"+Math.floor(Math.random()*10000000)).then(
          data => {
            count++;
            time+=data.data.time;
            if(count>1000)console.log("AverageRespondTime for "+count+" Get: "+(Math.round(time/count*10)/10)+"ms");
            if(count===round){
              console.log("AverageRespondTime for "+round+" Get: "+(Math.round(time/round*10)/10)+"ms");
              time=0;
            }
          },
          err => console.error(err)
        );
      }, (1));
  }
  hdlInput(e){this.setState({spam:e.target.value});}
  componentDidMount() {
  }
  render() {
    return (
      <div id = "content" >
        <div>POSTWOMAN!</div><br/><br/>
        <button onClick={this.singleGet.bind(this)}>single Get</button><br/><br/>
        <input id="spam" onChange={this.hdlInput.bind(this)} value={this.state.spam}/>
        <button onClick={this.multiGet.bind(this)}>spam Get</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
