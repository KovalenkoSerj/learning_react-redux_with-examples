import React from 'react'
import { MyInput } from './OneMoreComponent' 

export const Func = () => {
	let inputRef = null;

	const handleClick = () => {
		inputRef.focus()
	}

	return (
		<>
			<div>
				<span>Input</span>
				<MyInput
					inputRef={(input) => {inputRef = input }}
				/>
				<input type="submit"
								value="submit"
								onClick={handleClick}
								/>
				</div>
		</>
	)
}
