const initialState = {
	posts: [
		{id: '1', title: 'Some first title', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure magni rerum explicabo accusamus amet dolorem necessitatibus, sunt, debitis ratione quae, adipisci voluptas placeat? Itaque, possimus explicabo voluptate magnam obcaecati error!'},
		{id: '2', title: 'Some second title', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure magni rerum explicabo accusamus amet dolorem necessitatibus, sunt, debitis ratione quae, adipisci voluptas placeat? Itaque, possimus explicabo voluptate magnam obcaecati error!'},
		{id: '3', title: 'Some third title', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure magni rerum explicabo accusamus amet dolorem necessitatibus, sunt, debitis ratione quae, adipisci voluptas placeat? Itaque, possimus explicabo voluptate magnam obcaecati error!'}
	]
}


export const rootReducer = ( state = initialState, action ) => {
	if(action.type === 'DELETE_POST'){
		let newPost = state.posts.filter(post => {
			return action.id !== post.id
		});
		return {
			...state,
			posts: newPost
		}
	}
	return state;
}