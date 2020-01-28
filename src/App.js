import React from 'react';
import Card from './components/Card.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { content: content }
  }
  render() { 
    return ( 
      <div className="App">
        <Card content={this.state.content}/>
      </div>
     );
  }
}
 
export default App;

