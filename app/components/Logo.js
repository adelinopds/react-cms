import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/agrokalkulator-logo.png';

const LogoWrapper = styled.div`
  z-index: 1000;
	position: fixed;
	left: 36px;
	top: 30px;
	
	> a > img {
		width: 80px;
	}
`;

export default class Logo extends React.Component {
	render = () => {
		return (
			<LogoWrapper>
				<Link to="/">
					<img src={logoImage} alt="logo agrocalculator"/>
				</Link>
			</LogoWrapper>
		);
	}
}
