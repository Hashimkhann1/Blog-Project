import React from 'react'
import { makeStyles , Box, Typography} from '@material-ui/core' 
import bannerImg from '../../images/banner.jpeg'



const useStyle = makeStyles({
	image: {
		background: `url(${bannerImg}) center /55% repeat-x #000`,
		width: '100%',
		height: '50vh',
		display: 'flex',
		flexDirection:'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& :first-child' : {
			fontSize : 66,
			color: '#FFF',
			lineHeight: 1
		},
		'& :last-child' :{
			fontSize:20,
			color: '#FFF'
		}
	}
})


const Banner = () => {

	const classes = useStyle()

	return (
		<div>
			<Box className={classes.image}>
				<Typography>BLOG</Typography>
				<Typography>Code by Hashim</Typography>
			</Box>
		</div>
	)
}

export default Banner
