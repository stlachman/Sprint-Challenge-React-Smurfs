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

const Smurf = props => {
  return (
    <Tile>
      <Title>{props.name}</Title>
      <BoldText>{props.height} tall</BoldText>
      <Text>{props.age} smurf years old</Text>
    </Tile>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

