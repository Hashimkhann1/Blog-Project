import React from 'react'
import { Box , makeStyles , FormControl, InputBase, Button, TextareaAutosize} from '@material-ui/core'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import { useEffect } from 'react';
import { getpostId , updatePost } from '../../service/api';
import {useHistory} from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
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
	},
	form :{
		display : 'flex',
		flexDirection: 'row',
		marginTop : 10,
		
	},
	textField : {
		 flex: 1,
		 margin : '0 30px',
		 fontSize : 25,
		 borderBottom: '1px solid #878787'
	},
	textarea : {
		width : '95%',
		margin :50,
		border : 'none',
		fontSize :18,
		outline : 'none'

	}
}))


const initialState = {
	title:'',
	descripition:'',
	picture:'',
	username:'M hashim khan',
	categories:'All',
	createDate: new Date()
}

const UpdateView = ({match}) => {
	
	
	const classes = useStyle()
	const history = useHistory()


	const [UpdatePost , setUpdatePost] = useState(initialState)

	const url = UpdatePost.picture || 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'


	useEffect(() => {
		const fatchUpDateData = async () => {
			let updataedata = await getpostId(match.params.id)
			setUpdatePost(updataedata)
		}
		fatchUpDateData()
	}, [])

	const handleChange = (e) => {
		setUpdatePost({ ...UpdatePost , [e.target.name]:e.target.value })
	}


	const updatBlog = async () => {
		await updatePost(match.params.id , UpdatePost)
		history.push(`/details${match.params.id}`)
	}
	

	return (
		<Box className={classes.container}>
			 <img src={url} alt="create_blog" className={classes.image} />

			 <FormControl className={classes.form}>
				 <AddCircleIcon fontSize='large' color='action'/>
				 <InputBase placeholder='Title' name='title' onChange={(e) => handleChange(e)} value={UpdatePost.title} className={classes.textField} />
				 <Button variant='contained' onClick={() => updatBlog()} color='primary'>Update</Button>
			 </FormControl>
			 <TextareaAutosize rows={5} name='descripition' onChange={(e) => handleChange(e)} placeholder='Tell your story...' value={UpdatePost.descripition} className={classes.textarea}/>
		</Box>
	)
}

export default UpdateView

