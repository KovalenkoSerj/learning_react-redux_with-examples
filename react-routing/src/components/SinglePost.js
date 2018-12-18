import React, { Component } from 'react';
import axios from 'axios';
import bob from '../bob.png'

export default class SinglePost extends Component {
	state = {
		post: null
	}
	componentDidMount () {
		let id = this.props.match.params.post_id;
		axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
			.then(res => {
				this.setState({
					post: res.data
				})
			})
	}
	
	render() {

		const post = this.state.post ? 
		(
			<div className="post">
			<img src={bob} alt=""/>
			<h4 className="center">{this.state.post.titl}</h4>
			<p>{this.state.post.body}</p>
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
