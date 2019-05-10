import React, { Component } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 3.5rem 0 0;
`;

const FormTitle = styled.h2`
  font-size: 2.5rem;
`;

const Form = styled.form`
  max-width: 550px;
  margin: 0 auto;
  display: inline-block;
  text-align: center;
`;

const FormInput = styled.input`
  display: block;
  margin-top: 1.4rem;
  padding: 0.5rem 0.2rem 0.5rem 0.3rem;
  font-size: 1.4rem;
  border: 0;
  border-bottom: 2px solid #0ea8eb;
  
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  display: inline-block;
  font-size: 1.4rem;
  color: #f9f9f9;
  margin-top: 1.5rem;
  background: #0ea8eb;
  border: 0;
`;

class UpdateSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.activeSmurf
    };
  }


  handleInputChange = event => {
    event.persist();
    let value = event.target.value;
    if (event.target.value === "age") {
      value = parseInt(value, 10);
    }
    this.setState((prevState) => ({
      smurf: {
        ...prevState.smurf,
        [event.target.name]: value
      }
    }));
  };


  handleSubmit = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.updateSmurf(this.state.smurf)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  render() {
    return (
      <FormContainer>
        <FormTitle>Update a Smurf</FormTitle>
        <Form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
            type="text"
          />
          <FormInput
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
            type="number"
          />
          <FormInput
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
            type="text"
          />
          <Button type="submit">Update Smurf</Button>
        </Form>
      </FormContainer>
    );
  }
}

export default UpdateSmurfForm;
