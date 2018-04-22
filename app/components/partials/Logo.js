import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/agrokalkulator-logo.png';

const LogoWrapper = styled.div.attrs({ className: 'logo-wrapper' })`
	display: flex;
	justify-content: center;
	height: 120px;
	
	> a {
		display: flex;
		> img {
			width: 80px;
			height: 80px;
		}
	}
`;

export default class Logo extends React.Component {
	render = () => {
		return (
			<LogoWrapper>
				<Link to="/">
					<img src={logoImage} alt="entymon logo"/>
				</Link>
			</LogoWrapper>
		);
	}
}
