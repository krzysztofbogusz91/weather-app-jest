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
        // this.props.fetchUser()
        // if( this.props.cords !== undefined ){
        //     const cord = this.props.cords;
        //     this.props.fetchForecast(cord)
        //     this.props.fetchWeather(cord);
        // } 
    }


    render() {
       //console.log(this.props)
        return (
            <div>
                <form 
                    action="submit" 
                 >
                    <input
                        value={this.state.search}
                        onChange={this.inputChange}
                        type="text" 
                        className='search-fetch'/>
                </form>
            </div>
        );
    }
}

Current.propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
    fetchForecast: PropTypes.func.isRequired,
    today: PropTypes.any,
    weather: PropTypes.any,
    cords: PropTypes.any,
};

// const mapStateToProps = state => ({
//     ...state
//    });

export default connect( state => ({...state}) , { fetchWeather, fetchUser, fetchForecast } )(Current);
