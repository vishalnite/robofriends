import React from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({robots: user}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    
    render () {

        const {robots, searchfield} = this.state;   
        const filteredrobots = robots.filter(robot => {
           return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
       
        if(!robots.length) {
           return <h1>Loading</h1>
        }
        else {
           return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>    
                        <Cardlist robots = {filteredrobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
        }     
    }   
}

export default App;