import React from 'react';
import axios from 'axios';

class SingleSmurf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      smurf: null
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3333/getSmurfById/${this.props.match.params.id}`)
    .then(res => this.setState({ smurf: res.data}))
    .catch(err => console.log(err))
  }

  render() {
    const { smurf } = this.state;

    if (!smurf) {
      return <h2>Loading Smurf Data...</h2>
    }
    return (
      <div>
        <h2>Name: {smurf.name}</h2>
        <p>Height: {smurf.height}</p>
        <p>Age: {smurf.age}</p>
      </div>
    )
  }

}


export default SingleSmurf;