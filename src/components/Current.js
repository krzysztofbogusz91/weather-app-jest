import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather, fetchUser, fetchForecast }  from '../actions/index';

export class Current extends Component {
    state = {
        search:""
    }

    componentDidMount() {
        this.props.fetchUser()
        }

    inputChange = (e) =>{
        this.setState({
            search: e.target.value
        })
        //MOVE TO BETTER METHOD JUST FOR TEST
        // if( this.props.cords !== undefined ){
        //     const cord = this.props.cords;
        //     this.props.fetchForecast(cord)
        //     this.props.fetchWeather(cord);
        // } 
    }

    render() {
        return (
            <div>
                <form action="submit">
                    <input
                        value={this.state.search}
                        onChange={this.inputChange} type="text" className='search-fetch input-group'/>
                </form>
            </div>
        );
    }
}

Current.propTypes = {};

const mapStateToProps = state => ({
    ...state
   });

export default connect(mapStateToProps, { fetchWeather, fetchUser, fetchForecast } )(Current);
