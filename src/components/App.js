import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doSomething}  from '../actions/index';



class App extends Component {
  componentDidMount(){
    this.props.doSomething("data")
  }

  render() {
    
    console.log(this.props.result)
    return (
        <div >
        APP
        </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })


export default connect(mapStateToProps, { doSomething } )(App);
