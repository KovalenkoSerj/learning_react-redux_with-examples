import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import bob from '../bob.png';
import { deletePost } from '../redux/actions/postActions'



class SinglePost extends Component {
	// state = {
	// 	post: null
	// }
	// componentDidMount () {
	// 	let id = this.props.match.params.post_id;
	// 	axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
	// 		.then(res => {
	// 			this.setState({
	// 				post: res.data
	// 			})
	// 		})
	// }

	render() {
		this.handleDelete = () => {
			this.props.deletePost(this.props.post.id);
			this.props.history.push('/')
		}
		console.log(this.props)
		const post = this.props.post ?
			(
				<div className="post">
					<img src={bob} alt="123" />
					<h4 className="center">{this.props.post.title}</h4>
					<p>{this.props.post.body}</p>
					<div className="center">
						<button className="btn grey" onClick={this.handleDelete}>Delete post</button>
					</div>
				</div>
			)
			:
			(
				<div className="center">Loading...</div>
			)
		return (
			<div className='container'>
				<h4>{post}</h4>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.post_id;
	const getId = state.posts.find(post => post.id === id)
	return {
		post: getId
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (id) => { dispatch(deletePost(id)) }
	}

}


export default connect(mapStateToProps, mapDispatchToProps)(SinglePost)
