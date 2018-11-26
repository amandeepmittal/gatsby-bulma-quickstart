import React from 'react';

import './style.scss';

const Layout = ({ children }) => (
	<div>
		<section className="hero has-background-white">
			<div className="hero-body">
				<div className="container">
					<h1 className="is-uppercase is-size-1">Hello from Bulma + Gatsby</h1>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column">
						<div className="notification is-primary">
							<p className="is-size-5">
								Aliqua sint id ea mollit aliquip ex anim excepteur nulla nulla.
								Cupidatat enim elit labore aliquip ad. In ea exercitation fugiat
								elit pariatur qui mollit. Laborum proident irure quis ut.
								Consectetur excepteur Lorem Lorem aute exercitation pariatur
								velit. Voluptate enim cillum quis aliqua sit duis anim
								voluptate.
							</p>
						</div>
					</div>
					<div className="column">
						<div className="notification is-info">
							<p className="is-size-5">
								Aliqua sint id ea mollit aliquip ex anim excepteur nulla nulla.
								Cupidatat enim elit labore aliquip ad. In ea exercitation fugiat
								elit pariatur qui mollit. Laborum proident irure quis ut.
								Consectetur excepteur Lorem Lorem aute exercitation pariatur
								velit. Voluptate enim cillum quis aliqua sit duis anim
								voluptate.
							</p>
						</div>
					</div>
					<div className="column">
						<div className="notification is-warning">
							<p className="is-size-5">
								Aliqua sint id ea mollit aliquip ex anim excepteur nulla nulla.
								Cupidatat enim elit labore aliquip ad. In ea exercitation fugiat
								elit pariatur qui mollit. Laborum proident irure quis ut.
								Consectetur excepteur Lorem Lorem aute exercitation pariatur
								velit. Voluptate enim cillum quis aliqua sit duis anim
								voluptate.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Layout;
