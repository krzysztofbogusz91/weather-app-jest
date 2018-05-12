import React, { Component } from 'react';
import Current from "./Current";
import { Route, BrowserRouter } from 'react-router-dom';
import { Header } from '../containers/Header';
import Search from './Search';

// TODO 
//-- Add default route and 404 page
class App extends Component {
    render() {
        return (
        <div className={'main container'} >
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path='/' component={ Current }/>
                    <Route path='/search' component={ Search }  />
                </div>
            </BrowserRouter>
        </div>
    );
  }
}


export default App;
