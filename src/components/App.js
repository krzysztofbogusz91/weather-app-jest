import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather }  from '../actions/index';
import Current from "./Current";


export class App extends Component {
    componentDidMount() {
        
    }
    render() {
        console.log(this.props)
        return (
        <div className={'main container'} >
            <Current/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 });

//just temporally for manual tests, than just remove and export just app for test
export default connect(mapStateToProps, { fetchWeather } )(App);
