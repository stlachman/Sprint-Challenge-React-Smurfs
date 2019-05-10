import React from 'react';
import { Link } from 'react-router-dom';
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

const StyledLink = styled(Link)`
  color: #f9f9f9;
  font-size: 1.5rem;
  display: block;
  margin-bottom: 1rem;
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

const Smurf = props => {
  return (
    <Tile>
      <Title>{props.name}</Title>
      <BoldText>{props.height} tall</BoldText>
      <Text>{props.age} smurf years old</Text>
      <StyledLink to={`/smurfs/${props.id}`}>View Smurf</StyledLink>
      <Button onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</Button>
    </Tile>
  )
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

