import React from 'react'

export const Test = (props) => {
	return (
		<div>
			<h1>{props.str}</h1>
			<h1>{props.bool ? 'bool' : 'wrong'}</h1>
			<h1>{props.str0num}</h1>
			<div>
				{
					props.array.map((val) => {
						return (
							<li key={val}>{val}</li>
						)
					})
				}
			</div>
			<div>
				{
					props.arrayOfObj.map((val) => {
						return (
							<li key={val.age}>{val.name}</li>
						)
					})
				}

			</div>
			<h1>{props.children}</h1>
		</div>
	)
}
