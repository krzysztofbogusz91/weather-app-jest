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
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <label for="text-area">Messsage</label>
                            <textarea type="text" class="form-control" id="text-area" />
                        </div>
                        </form>
                        </div>
                    </div>
                    );
                }
            }
            
            
            Contact.propTypes = propTypes;
            
            
export default Contact;