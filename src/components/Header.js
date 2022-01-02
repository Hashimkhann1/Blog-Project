import React from 'react'
import {AppBar , Toolbar , Typography , makeStyles} from '@material-ui/core'
import { Link , useNavigate } from 'react-router-dom'
import { width } from '@mui/system'



const useStyles = makeStyles({

	component:{
		backgroundColor: '#FFFFFF',
		color:'black',
	},
	container: {
		justifyContent: 'center',
		'& > *': {
			padding: 20,
			fontSize: 20
		}
	},
	link : {
		color :'inherit',
		textDecoration :"none",
	},
	Lbtn : {
		backgroundColor : 'unset',
		border : 'none',
		cursor : 'pointer',
		fontSize : 19,
		color :'#262626',
		textTransform : 'uppercase',
		fontFamily : 'Roboto'
	},
	logout : {
		cursor : 'pointer'
	},
	headerNone : {
		
	},
	hAnone : {
		backgroundColor : '#66727571',
		position : 'absolute',
		boxShadow : 'none',
		height : '72px',

	}

})

const Header = ({user}) => {


	const hsitory = useNavigate() 
	
	const classes = useStyles()

	const Logout = () => {
		localStorage.removeItem('user')
		// hsitory('/login')
	}
	// console.log(user)

	return (
		<>
		{user && user._id ? <div>
			<AppBar className={classes.component}>
				<Toolbar className={classes.container}>
					<Link to={'/'} className={classes.link}><Typography>Home</Typography></Link>
					<Typography>About</Typography>
					<Typography>Contact</Typography>
					<Link to={'/login'}><Typography className={classes.logout} onClick={Logout}>Logout</Typography></Link>
				</Toolbar>
			</AppBar>
		</div> :
			<AppBar className={classes.hAnone}>
				<Toolbar className={classes.headerNone}></Toolbar>
				</AppBar>}
		</>
		
	)
}

export default Header
