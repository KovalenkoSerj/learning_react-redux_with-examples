const initialState = {
	age: 21
}


export const reducer = (state = initialState, action) => {
	const newState = { ...state };

	switch (action.type) {
		// case 'AGE_UP':
		// 	 newState.age += action.value;
		// 	 newState.loading = false
		// break;
		case 'AGE_UP_ASYNC':
		newState.age += action.value;
 		break;
		case 'AGE_DOWN':
			 newState.age -= action.value;
		break;
		// case 'LOADING':
		// 	newState.loading = true;
		// break;

		default:
		break;
	}

	return newState;
}

