import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    componentDidCatch(err, info) {
        console.log('에러가 발생');
        console.log({
            err,
            info
        });
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) {
            return <h1>에러 발생!</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;