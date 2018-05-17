import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {

};

class Contact extends Component {
    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-content-center m-5">
                <h2 className="align-self-center p-3">Contactc Forms etc.</h2>
                <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text-area">Messsage</label>
                            <textarea type="text" className="form-control" id="text-area" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                    );
                }
            }
            
            Contact.propTypes = propTypes;
            
            
export default Contact;