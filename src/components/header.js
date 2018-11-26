import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<figure className="is-left">
						<span className="icon is-large ">
							<img src={gatsbyLogo} alt="gatsby-logo" />
						</span>
					</figure>
					<figure className="is-left">
						<span className="icon is-large">
							<img src={bulmaLogo} alt="bulma-logo" />
						</span>
					</figure>
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
								Hello from Bulma + Gatsby
							</h1>
							<p className="subtitle has-text-white is-size-3">
								A Bulma CSS + GatsbyJS Starter Kit{' '}
								<a
									className="button is-info is-inverted"
									href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
								>
									<span className="icon">
										<FaGithub size="fa-2x" />
									</span>
									<span>Download</span>
								</a>
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
