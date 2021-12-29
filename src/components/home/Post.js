import { Box , Typography , makeStyles} from '@material-ui/core'
import React from 'react'



const useStyle = makeStyles({

	postContainer: {
		height: 350,
		border: '1px solid #d3cede',
		borderRadius: 10,
		margin: 10,
		display : 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& > *': {
			padding: '0 5px 5px 5px'
		}
	},
	image: {
		height:200,
		width: '100%',
		borderRadius: '10px 10px 0 0',
		objectFit: 'cover',
	},
	text : {
		fontSize: 12,
		color : '#878787'
	},
	heading : {
		fontSize :18,
		fontWeight : 600,
		color :'#545454',
		textTransform : 'capitalize'
	},
	detial : {
		fontSize : 14,
		wordBreak :'break-word',
	}
})

const Post = ({post}) => {

	const url = post.picture || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'

	const classes = useStyle()

	const addElipsis = (str , limit) => {
		return str.length > limit ? str.substring(0 , limit) + '...' : str;
	}
	

	return (
		<>
		<Box className={classes.postContainer}>
			<img src={url} alt="post" className={classes.image}/>
			<Typography className={classes.text}>{post.categories}</Typography>
			<Typography className={classes.heading}>{addElipsis(post.title , 20)}</Typography>
			<Typography className={classes.text}>Author: {post.username}</Typography>
			<Typography className={classes.detial}>{addElipsis(post.descripition , 100)}</Typography>
		</Box>
		</>
	)
}

export default Post
