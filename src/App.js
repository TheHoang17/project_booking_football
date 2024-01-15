import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';

class App extends Component {
 
  render (){
return (
  <BrowserRouter>
  <div className="App">
    <Header />
    {/* <Footer/> */}
  </div>
</BrowserRouter>

  );
}
}

export default App;
