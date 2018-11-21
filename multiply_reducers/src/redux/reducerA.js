const initialState = {
	a: 1
}

export const reducerA = ( state = initialState, action) => {

	if(action.type === 'UPDATE_A'){
		return{
			...state, 
			a: state.a + action.b
		}
	}
	return state
}