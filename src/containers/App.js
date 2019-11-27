import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setSearchField, requestBots } from '../actions';
import './App.css';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll'


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
  componentDidMount() {
    this.props.onBotRequest()
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
        <div className ='tc wrapper'>
          <div className = 'title'>
            <h1 className = 'f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
          </div>
          <Scroll>
            {isPending ?
              <h1>Loading...</h1> :
              <ErrorBoundary>
                <CardList robots={filteredRobots}/>
              </ErrorBoundary>
            }
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
