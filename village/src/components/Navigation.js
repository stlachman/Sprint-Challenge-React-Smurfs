import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  background: #E6E6FA;
`;

const NavBar = styled.nav`
  padding: 2rem;
`;

const ListContainer = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin: 0 1.2rem;
`;

const NavElement = styled(NavLink)`
  color: #0ea8eb;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
`;


const Navigation = () => {
  return ( 
    <Header>
      <NavBar>
        <ListContainer>
          <ListItem><NavElement to="/">Home</NavElement></ListItem>
          <ListItem><NavElement to="/smurf-form">Add Smurf</NavElement></ListItem>
        </ListContainer>
      </NavBar>
    </Header>
  )
}

export default Navigation;