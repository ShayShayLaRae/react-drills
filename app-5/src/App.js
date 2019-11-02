import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render(){
    return (
      <div className='App'>
        <Image url={'https://404store.com/2017/12/08/random-pic-14.jpg'} />
      </div>
    );
  }
}

export default App;