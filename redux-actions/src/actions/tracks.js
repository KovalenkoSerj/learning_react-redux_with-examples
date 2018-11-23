let data = [
	{
		id: 1,
		name: 'track1'
	},
	{
		id: 2,
		name: 'track2'
	},
	{
		id: 3,
		name: 'track3'
	},
	{
		id: 4,
		name: 'track4'
	},
	{
		id: 5,
		name: 'track5'
	},
	{
		id: 6,
		name: 'track6'
	},
]


export const getTracks = () => dispatch => {
		setTimeout(() => {
			dispatch({ type: 'FETCH_TRACK_SUCCESS', payload: data })
			console.log('got tracks');
		}, 2000 )
}