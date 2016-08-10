/**
 * Created by akerr on 8/6/16.
 */
var React = require ("react");
class UI extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: props.name};
  }
  render(){
    return (<div>
      <p>Hello {this.state.name}</p>
    </div>);
  }
}

class Header extends React.Component{
  render(){
    return (<div>
      <p>Hello {this.state.name}</p>
    </div>);
  }
}



module.exports =Header;