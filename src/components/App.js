import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doSomething}  from '../actions/index';



export class App extends Component {
    render() {
        return (
        <div className={'main container'} >
        APP
        </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 });

//just temporally for manual tests, than just remove and export just app for test
export default connect(mapStateToProps, { doSomething } )(App);
