import React, { Component } from 'react';
class Course extends Component {
    componentDidMount() {
        console.log("here");
    }
    render () {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.match.params.title}</h1>
                <p>You selected the Course with ID:{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;