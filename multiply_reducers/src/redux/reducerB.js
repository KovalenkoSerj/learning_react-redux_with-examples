const initialState = {
	b: 1
}

export const reducerB = ( state = initialState, action) => {

	if(action.type === 'UPDATE_B') {
		return{
			...state,
			b: state.b + action.a
		}
	}
	return state
}