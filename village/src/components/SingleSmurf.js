import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`margin: 3.5rem 0 0;`;

const Title = styled.h2`
	margin: 0 0 2rem;
	font-size: 2.3rem;
`;
const Text = styled.p`font-size: 1.7rem;`;

class SingleSmurf extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			smurf: null
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:3333/getSmurfById/${this.props.match.params.id}`)
			.then((res) => this.setState({ smurf: res.data }))
			.catch((err) => console.log(err));
	}

	render() {
		const { smurf } = this.state;

		if (!smurf) {
			return <Title>Loading Smurf Data...</Title>;
		}
		return (
			<Container>
				<Title>Name: {smurf.name}</Title>
				<Text>Height: {smurf.height}</Text>
				<Text>Age: {smurf.age}</Text>
			</Container>
		);
	}
}

export default SingleSmurf;
