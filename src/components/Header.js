import React from 'react'
import {AppBar , Toolbar , Typography , makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom'




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
	}

})

const Header = () => {
	
	const classes = useStyles()

	return (
		<div>
			<AppBar className={classes.component}>
				<Toolbar className={classes.container}>
					<Link to={'/'} className={classes.link}><Typography>Home</Typography></Link>
					<Typography>About</Typography>
					<Typography>Contact</Typography>
					<Typography>Login</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
