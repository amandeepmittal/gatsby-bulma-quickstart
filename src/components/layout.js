import React from 'react';
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa';

import './style.scss';

const Layout = ({ children }) => (
	<div>
		<section className="hero has-background-white">
			<div className="hero-body">
				<div className="container center">
					<h1 className="is-uppercase is-size-1">Hello from Bulma + Gatsby</h1>
				</div>
			</div>
		</section>
		<section className="section has-background-light">
			<div className="container">
				<div className="columns">
					<div className="column">
						<article className="media notification is-primary">
							<figure className="media-left">
								<span className="icon">
									<FaCss3Alt size="fa-2x" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Bulma?</h1>
									<p className="is-size-5">
										Aliqua sint id ea mollit aliquip ex anim excepteur nulla
										nulla. Cupidatat enim elit labore aliquip ad. In ea
										exercitation fugiat elit pariatur qui mollit. Laborum
										proident irure quis ut. Consectetur excepteur Lorem Lorem
										aute exercitation pariatur velit. Voluptate enim cillum quis
										aliqua sit duis anim voluptate.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column">
						<article className="media notification is-warning">
							<figure className="media-left">
								<span className="icon">
									<FaCss3Alt size="fa-2x" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Bulma?</h1>
									<p className="is-size-5">
										Aliqua sint id ea mollit aliquip ex anim excepteur nulla
										nulla. Cupidatat enim elit labore aliquip ad. In ea
										exercitation fugiat elit pariatur qui mollit. Laborum
										proident irure quis ut. Consectetur excepteur Lorem Lorem
										aute exercitation pariatur velit. Voluptate enim cillum quis
										aliqua sit duis anim voluptate.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column">
						<article className="media notification is-info">
							<figure className="media-left">
								<span className="icon">
									<FaCss3Alt size="fa-2x" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Bulma?</h1>
									<p className="is-size-5">
										Aliqua sint id ea mollit aliquip ex anim excepteur nulla
										nulla. Cupidatat enim elit labore aliquip ad. In ea
										exercitation fugiat elit pariatur qui mollit. Laborum
										proident irure quis ut. Consectetur excepteur Lorem Lorem
										aute exercitation pariatur velit. Voluptate enim cillum quis
										aliqua sit duis anim voluptate.
									</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="columns is-multiline">
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaCss3Alt size="fa-2x" className="has-text-warning" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Bulma?</h1>
									<p className="subtitle is-size-5">
										Aliqua sint id ea mollit aliquip ex anim excepteur nulla
										nulla. Cupidatat enim elit labore aliquip ad. In ea
										exercitation fugiat elit pariatur qui mollit. Laborum
										proident irure quis ut. Consectetur excepteur Lorem Lorem
										aute exercitation pariatur velit. Voluptate enim cillum quis
										aliqua sit duis anim voluptate.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaHtml5 size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Bulma?</h1>
									<p className="subtitleis-size-5">
										Aliqua sint id ea mollit aliquip ex anim excepteur nulla
										nulla. Cupidatat enim elit labore aliquip ad. In ea
										exercitation fugiat elit pariatur qui mollit. Laborum
										proident irure quis ut. Consectetur excepteur Lorem Lorem
										aute exercitation pariatur velit. Voluptate enim cillum quis
										aliqua sit duis anim voluptate.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaCss3Alt size="fa-2x" className="has-text-warning" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Bulma?</h1>
									<p className="subtitle is-size-5">
										Aliqua sint id ea mollit aliquip ex anim excepteur nulla
										nulla. Cupidatat enim elit labore aliquip ad. In ea
										exercitation fugiat elit pariatur qui mollit. Laborum
										proident irure quis ut. Consectetur excepteur Lorem Lorem
										aute exercitation pariatur velit. Voluptate enim cillum quis
										aliqua sit duis anim voluptate.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaHtml5 size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Bulma?</h1>
									<p className="subtitleis-size-5">
										Aliqua sint id ea mollit aliquip ex anim excepteur nulla
										nulla. Cupidatat enim elit labore aliquip ad. In ea
										exercitation fugiat elit pariatur qui mollit. Laborum
										proident irure quis ut. Consectetur excepteur Lorem Lorem
										aute exercitation pariatur velit. Voluptate enim cillum quis
										aliqua sit duis anim voluptate.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaCss3Alt size="fa-2x" className="has-text-warning" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Bulma?</h1>
									<p className="subtitle is-size-5">
										Aliqua sint id ea mollit aliquip ex anim excepteur nulla
										nulla. Cupidatat enim elit labore aliquip ad. In ea
										exercitation fugiat elit pariatur qui mollit. Laborum
										proident irure quis ut. Consectetur excepteur Lorem Lorem
										aute exercitation pariatur velit. Voluptate enim cillum quis
										aliqua sit duis anim voluptate.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaHtml5 size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Bulma?</h1>
									<p className="subtitleis-size-5">
										Aliqua sint id ea mollit aliquip ex anim excepteur nulla
										nulla. Cupidatat enim elit labore aliquip ad. In ea
										exercitation fugiat elit pariatur qui mollit. Laborum
										proident irure quis ut. Consectetur excepteur Lorem Lorem
										aute exercitation pariatur velit. Voluptate enim cillum quis
										aliqua sit duis anim voluptate.
									</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Layout;
