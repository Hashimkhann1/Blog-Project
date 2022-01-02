import React from 'react'
import { Box, makeStyles , Typography } from '@material-ui/core'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate , useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getpostId , deleteBlogPost } from '../../service/api';
import Comments from '../comment/Comments';


const usestyle = makeStyles((theme) => ({
	container : {
		padding : '0 100px',
		[theme.breakpoints.down('md')] :{
			padding: 0
		}
	},
	image : {
		width:'100%',
		height :'50vh',
		objectFit :'cover',
		// backgroundPosition : 'center'
	},
	icons : {
		float: 'right'
	},
	icon : {
		margin :5,
		border : '1px solid #878787',
		padding : 5,
		borderRadius : 10,
		cursor : 'pointer'
	},
	title : {
		fontSize : 38,
		fontWeight : 600,
		textAlign : 'center',
		margin : '50px 0 10px 0',
		color :'#6d6d6e'

	},
	autherdate : {
		color :'#878787',
		display : 'flex',
		margin : '20px 0',
		[theme.breakpoints.down('sm')] : {
			display :'block'
		}
	},
	auther : {
		textDecoration : 'none',
		color :'inherit'
	}

}))


const Detailview = ({match}) => {
	const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80update.jsx'

	const classes = usestyle()
	const history = useNavigate()

	const params = useParams()

	const [PostById , setPostById] = useState({})

	useEffect(() => {
		const postId = async () => {
			let detaildata = await getpostId(params.id)
			setPostById(detaildata)
		}
		postId()
	}, [])

	const deleteBlog = async () => {
		if(PostById._id !== ''){
			await deleteBlogPost(PostById._id)
			history('/')
		}
		
	}

	const [UpdateDelete , setUpdateDelete] = useState({})
	
	// let localData = localStorage.getItem('user')
	// let userData = JSON.parse(localData)
	// setUpdateDelete(userData)
	// console.log(UpdateDelete)

	const checkForUser = () => {
		let data = localStorage.getItem('user')
		if(data){
		  setUpdateDelete(JSON.parse(data))
		}
	  }
	  useEffect(() => {
		checkForUser();
	  }, [])


	return (
		<div>
			<Box className={classes.container}>
				<img src={PostById.picture || url} alt="detailimg" className={classes.image} />
				{UpdateDelete.Name === PostById.username ? <Box className={classes.icons}>
					<Link to={`/update/${PostById._id}`}><EditIcon className={classes.icon} color='primary'/></Link>
					<DeleteIcon onClick={() => deleteBlog()} className={classes.icon}  color='error'/>
				</Box> : null}
				<Typography className={classes.title}>{PostById.title}</Typography>
				<Box className={classes.autherdate}>
					<Link to={`/?username=${PostById.username}`} className={classes.auther}>
						<Typography >Autor:<span style={{fontWeight : 600}}> {PostById.username}</span></Typography>
					</Link>
					<Typography style={{marginLeft : 'auto'}}>{new Date(PostById.createDate).toDateString()}</Typography>
				</Box>
				<Typography>{PostById.descripition}</Typography>
				<Comments post={PostById}/>
			</Box>
		</div>
	)
}

export default Detailview
