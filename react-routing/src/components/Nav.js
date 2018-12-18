import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Nav = () => {
	return (
		<nav className="nav-wrapper blue darken-4">
			<div className="cotainer">
				<h6 className="brand-logo">Some Page</h6>
				<ul className='right'>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
		</nav>
	)
}

export default withRouter(Nav)