import React from 'react';

import './style.scss';

const Layout = ({ children }) => (
	<section className="hero is-fullheight has-background-white">
		<div className="hero-body">
			<div className="container">
				<h1 className="is-uppercase is-size-1">Hello from Bulma + Gatsby</h1>
			</div>
		</div>
	</section>
);

export default Layout;
