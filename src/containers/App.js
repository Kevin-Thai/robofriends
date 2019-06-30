import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll'
import './App.css';
import {setSearchField, requestBots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchBots.searchField,
    robots: state.fetchBots.robots,
    isPending: state.fetchBots.isPending,
    error: state.fetchBots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onBotRequest: () => dispatch(requestBots())
  }
}
class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({robots:users}));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ? 
      <h1>Loading...</h1> :
      (
        <div className ='tc wrapper'>
          <h1 className = 'f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);