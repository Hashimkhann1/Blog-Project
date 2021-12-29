import React from 'react'
import { Button , makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

import {categories} from '../home/constants/Data' 
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
	create : {
		margin: 20, 
		backgroundColor :'#6495ED',
		color:'#FFF',
		width: '86%',
		transition : '0.4s',
		"&:hover": {
			// color : '',
			// backgroundColor : '#768aab',
			// fontFamily : ''
		}
	},
	table : {
		border :'1px solid rgba(224 , 224 , 224 , 1)'
	},
	link :{
		textDecoration :'none', 
		color :'#585959'
	}
})

const Categories = () => {

	const classes = useStyle()	

	return (
		<>
			<Link to='/create' className={classes.link}><Button variant='contained' className={classes.create}>Create Blog</Button></Link>

			<Table className={classes.table}>
				<TableHead>
					 <TableRow>
						<TableCell>
							<Link to={'/'} className={classes.link}>
								All Categrios
							</Link>
						</TableCell>
						
					 </TableRow>
				</TableHead>
				<TableBody>
					{
					categories.map(category => (
						<TableRow>
							<TableCell><Link to={`/?category=${category}`} className={classes.link}>{category}</Link></TableCell>
						</TableRow>
					))
					}
				</TableBody>
			</Table>
		</>
	)
}

export default Categories