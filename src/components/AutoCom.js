import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateInput } from './../actions/index';


const propTypes = {
    
};


export class AutoCom extends Component {

    handleClick = (city) =>{
        this.props.updateInput( this.props.auto[city].city)
    }
    
    render() {
       // console.log( this.props.inputVal )
        

        const list = this.props.auto.map( (a,i) => {
            return (
                <li key={a.city}
                    onClick={this.handleClick.bind(this, i)}
                    >{a.city}, </li>
            )
        })

        return (
            <ul>
                {list}
            </ul>
        );
    }
}


AutoCom.propTypes = propTypes;


export default connect(state => ({ ...state }), { updateInput })(AutoCom);
