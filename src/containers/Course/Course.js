import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Course extends Component {
    render () {
        return (
            <div>
                <h1>{decodeURIComponent(this.props.location.search.slice(7))}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );  
    }
}

export default withRouter(Course);