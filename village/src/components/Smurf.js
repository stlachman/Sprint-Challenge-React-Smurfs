import React from 'react';

import styled from 'styled-components';

const Tile = styled.div`
  background: #0ea8eb;
  padding: 2.5rem;
  color: #f9f9f9;
  margin: 1rem 1.5rem 0;
`;

const Title = styled.h3`
  font-size: 1.8em;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const BoldText = styled(Text)`
  font-weight: 700;
`;

const Button = styled.button`
  background: #f9f9f9;
  color: #000;
  font-size: 1.5rem;
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  transition: 0.3s opacity ease-in;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

class Smurf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      smurf: null
    }
  }

  render() {
    return (
      <Tile>
        <Title>{this.props.name}</Title>
        <BoldText>{this.props.height} tall</BoldText>
        <Text>{this.props.age} smurf years old</Text>
        <Button onClick={() => this.props.deleteSmurf(this.props.id)}>Delete Smurf</Button>
      </Tile>
    )
  }
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

