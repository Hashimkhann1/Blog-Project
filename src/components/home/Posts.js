import { Grid } from '@material-ui/core'
import React from 'react'
import { useState , useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Post from './Post';
import {getAllPost} from '../../service/api'


const Posts = () => {

	const [Posts , setPosts] = useState([])
	const {search} = useLocation()

	useEffect(() => {
		const fatchData = async () => {
			let data = await getAllPost(search)
			setPosts(data)
		}
		fatchData();
	}, [search])

	console.log(search)


	return (
		<>
		{Posts && Posts.map((post) => (
			<Grid item lg={3} md={4} sm={6} xs={12}>
				<Link to={`/details${post._id}`} style={{textDecoration: 'none' , color: 'inherit'}}>
					<Post post={post}/>
				</Link>
			</Grid>
			
		))}

		
		</>
	)
}

export default Posts
