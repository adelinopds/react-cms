import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

/* eslint-disable */

export default class HomeHeader extends React.Component {
	
	state = {
		dataForLinks: [
			{
				mainLink: 'Main Link 1',
				href: 'pass the link',
				subLinks: [
					{
						subLink: 'Sub Link 1',
						href: 'pass the link',
						childLinks: [
							{
								childLink: 'Child Link 1',
								href: 'pass the link'
							},
							{
								childLink: 'Child Link 2',
								href: 'pass the link'
							}
						]
					},
					{
						subLink: 'Sub Link 2',
						href: 'pass the link',
						childLinks: []
					},
					{
						subLink: 'SubLink 3',
						href: 'pass the link',
						childLinks: []
					}
				]
			},
			{
				mainLink: 'Main Link 3',
				href: 'pass the link',
				subLinks: []
			}
		]
	};
	
	render = () => {
		return (
			<Grid>
				<div className="header">
					<Row>
						<Col xs={12} md={6}>
							<Link to="/hr">home</Link>
						</Col>
						<Col xs={12} md={6}>
						
						</Col>
					</Row>
				</div>
			</Grid>
		);
	}
}
