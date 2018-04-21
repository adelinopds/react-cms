import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogPage extends React.Component {
	render() {
		return (
			<div>
				<Link to="/">home</Link>
				Blog Pagd
			</div>
		);
	}
}
