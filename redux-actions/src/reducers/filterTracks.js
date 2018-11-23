const initialState = []




export const filterTracks = ( state = initialState, action) => {
	if(action.type === 'FIND_TRACK'){
		return action.payload	
	}
		return state;
}
