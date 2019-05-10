import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';
import SingleSmurf from './components/SingleSmurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3333/smurfs`)
    .then(res => this.setState({ smurfs: res.data }))
    .catch(err => console.log(err))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  postSmurf = newSmurf => {
    axios.post(`http://localhost:3333/smurfs`, newSmurf)
    .then(res => {
      this.setState( { smurfs: res.data })
      this.props.history.push('/');
    })
    .catch(err => console.log(err))
  }

  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      this.setState({ smurfs: res.data })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" render={props => <Smurfs {...props} deleteSmurf={this.deleteSmurf} smurfs={this.state.smurfs} />} />
        <Route path="/smurf-form" render={props => <SmurfForm {...props} postSmurf={this.postSmurf} />}/>
        <Route path="/smurfs/:id" render={props => <SingleSmurf {...props} /> }/>
      </div>
    );
  }
}

export default App;
