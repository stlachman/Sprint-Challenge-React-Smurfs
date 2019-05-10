import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const Wrapper = styled.div`
  margin: 2.5rem 0 0;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
`;

const SmurfContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2rem 0 0;
`;

class Smurfs extends Component {
  render() {
    // console.log(this.props);
    return (
      <Wrapper>
        <MainTitle>Smurf Village</MainTitle>
          <SmurfContainer>
            {this.props.smurfs.map(smurf => {
              
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  deleteSmurf={this.props.deleteSmurf}
                />
              );
            })}            
          </SmurfContainer>
      </Wrapper>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
