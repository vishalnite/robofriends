import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch (error, info) {
        this.setState({hasError: true});
    }

    render () {
        if (this.state.hasError) {
            return <h1>oops..That's Not Good!</h1>
        }
        else {
            return (
                <div>
                    {this.props.children}
                </div>
            );
        }
    }
}

export default ErrorBoundry;
