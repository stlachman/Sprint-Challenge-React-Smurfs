import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;


class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
          <SmurfContainer>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              );
            })}
          </SmurfContainer>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
