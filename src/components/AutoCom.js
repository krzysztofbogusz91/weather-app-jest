import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateInput } from './../actions/index';
import { code } from '../helpers/iso_codes';
import { Link, } from 'react-router-dom';


export class AutoCom extends Component {

    handleClick = (city) => {
        const countryCode = code.filter(a => a.name === city.country)
        const search = countryCode.length > 0 ? `${city.city}, ${countryCode[0]["alpha-2"]}` : `${city.city}`
        this.props.updateInput(search)
    }

    render() {
        //console.log('AutocOm', this.props.auto )
        //console.log('​AutoCom -> render -> ', this.props.inputVal);
        const myList = this.props.auto;
        const query = this.props.inputVal.toLowerCase();
        const filterd = myList.filter(a => {
            return a.city.toLowerCase().indexOf(query) !== -1
        }).sort((a, b) => {
            return a.city.toLowerCase().indexOf(query) < b.city.toLowerCase().indexOf(query) ? -1 : 1
        }).slice(0, 5)

        const list = filterd.map((a, i) => {
            return (
                <li key={i}
                    className="list-group-item"
                >
                    <Link to={`/search/${a.city}`}
                        onClick={this.handleClick.bind(this, a)}
                    >{a.city}</Link>
                    , {a.country} </li>
            )
        })

        return (
            <ul className="list-group">
                {list}
            </ul>
        );
    }
}


export default connect(state => ({ ...state }), { updateInput })(AutoCom);
