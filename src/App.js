import React, { Component } from 'react';
import Button from './components/button'; 
import List from './components/list';
import Input from './components/input'
import './App.css';

const style = {
  width: '50%',
  margin: '0 auto'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  onInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <div style={style} className="App">
        <List />
        <Input value={this.state.inputValue} onChange={this.onInputChange.bind(this)} />
        <Button onClick={() => alert('Please complete me!')} text="Add"/>
      </div> 
    );
  }
}

export default App;
