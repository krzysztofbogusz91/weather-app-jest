import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Current extends Component {
    state = {
        search:""
    }

    inputChange = (e) =>{
        this.setState({
            search: e.target.value
        })
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

export default Current;
