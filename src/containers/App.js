import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll'
import './App.css';
import {setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchBots.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value))
    }
}
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots:users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? <h1>Loading...</h1> :
        (
            <div className ='tc wrapper'>
                <h1 className = 'f1'>RoboFriends</h1>
                <SearchBox 
                    searchChange={this.onSearchChange} 
                    searchField ={searchfield}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);