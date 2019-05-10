import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';
import SingleSmurf from './components/SingleSmurf';
import UpdateSmurfForm from './components/UpdateSmurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: null
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

  updateSmurf = (updatedSmurf) => {
    axios.put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
    .then(res => {
      this.setState({ smurfs: res.data });
      this.props.history.push('/');
    })
    .catch(err =>  console.log(err));
  }

  setUpdateForm = (smurf) => {
    this.setState({ activeSmurf: smurf});
    this.props.history.push('/update-smurf');
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" render={props => <Smurfs {...props} deleteSmurf={this.deleteSmurf} smurfs={this.state.smurfs} />} />
        <Route path="/smurf-form" render={props => <SmurfForm {...props} postSmurf={this.postSmurf} />}/>
        <Route path="/smurfs/:id" render={props => <SingleSmurf {...props} setUpdateForm={this.setUpdateForm} /> }/>
        <Route path="/update-smurf" render={props =>  <UpdateSmurfForm updateSmurf={this.updateSmurf} activeSmurf={this.state.activeSmurf} {...props} /> }/>
      </div>
    );
  }
}

export default App;
