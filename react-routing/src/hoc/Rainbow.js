import React from 'react'

export const Rainbow = (WrappedComponent) => {
	
	const colours = ['red', 'green', 'yellow', 'blue', 'orange', 'pink'];
	const randomColour = colours[Math.floor(Math.random() * 5)];

	const className = randomColour + '-text';

	return (props) => {
		return (
			<div className={className}>
				<WrappedComponent {...props}/>
			</div>
		)
	}

}
