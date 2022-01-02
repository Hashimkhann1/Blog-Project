import React, { useState , useEffect } from 'react'
import { Box , makeStyles , FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate} from 'react-router-dom'
import { createPost  } from '../../service/api'
import FileBase from 'react-file-base64'

const useStyle = makeStyles((theme) => ({
	container : {
		padding : '0 100px',
		[theme.breakpoints.down('md')] :{
			padding: 0
		}
	},
	imageContainer : {
		width : '100%',
		height : '50vh',
		// border : '7px solid #000'
	},
	image : {
		width:'100%',
		height :'100%',
		objectFit : 'cover',
		// backgroundPosition : 'center'
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





const CreateView = () => {

	let user = localStorage.getItem('user')
	let userName = JSON.parse(user)
	
	const initialState = {
		title:'',
		descripition:'',
		picture:'',
		username:userName.Name,
		categories:'All',
		createDate: new Date()
	}

	const classes = useStyle();

	const [post , setPost] = useState(initialState)
	const [file , setFile] = useState('')
	const [Image , setImage] = useState('')
	// const [imageUrl , setimageUrl] = useState('')

	const history = useNavigate()

		const getImage = async () => {
			if(file!== ''){
				const data = {picture:file[0].base64};
				post.picture = data.picture
			}
		}
		
		// console.log(imageUrl)
	const handleChange = (e) => {
		setPost({ ...post , [e.target.name]:e.target.value})

	}
	const savePost = async () => {
		getImage()
		await createPost(post)
		// console.log(post);
		history('/')
	}

	const checkForImage = () => {
		if(file !== ''){
		  setImage(file[0].base64)
		}
	  }
	  useEffect(() => {
		checkForImage();
	  }, [file])


	const url = Image || 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

	// post.picture 

	return (
		<Box className={classes.container}>
			<Box className={classes.imageContainer}>
				<img src={url} alt="create_blog" className={classes.image} />
			</Box>

			 <FormControl className={classes.form}>
				 <label htmlFor="fileinput">
				 	<AddCircleIcon fontSize='large' color='action'/>
				 </label>
					 <FileBase type='file'  style={{display:'none'}} name='picture' multiple='false' onDone={(base64) => setFile(base64)}/>
				 <InputBase onChange={(e) => handleChange(e)} name='title' placeholder='Title' className={classes.textField} />
				 <Button onClick={() => savePost()} variant='contained' color='primary'>Publish</Button>
			 </FormControl>
			 <TextareaAutosize rows={5} placeholder='Tell your story...' onChange={(e) => handleChange(e)} name='descripition' className={classes.textarea}/>
		</Box>
	)
}

export default CreateView


