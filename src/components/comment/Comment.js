import { Box, makeStyles, Typography } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete';

import React from 'react'
import { DeleteComment } from '../../service/api';

const useStyle = makeStyles({
    commDataContainer : {
        width : '70%',
        padding : 10,
        // border : '1px solid #',
        backgroundColor : '#f0f0f0',
        margin : '12px 50px',
        borderRadius : '8px'
    },
    commNaDat : {
        display : 'flex',
        justifyContent : 'space-between',
        color :'#757575',
        // padding : '0px 10px'
    },
    mainComment : {
        color : '#403939',
        // padding : '0px 10px',
        fontSize : '19px'
    },
    delete : {
        display : 'flex',
        
    },
    delIcon : {
        marginLeft : 12,
        padding : 2 ,
        cursor : 'pointer',
        borderRadius : '50%',
        "&:hover" : {
            backgroundColor : '#c9c9c9',
        }
    }
})

const Comment = ({commData , setSChange}) => {

    const classes = useStyle()

    const deleteComm = async () => {
        await DeleteComment(commData._id)
        setSChange(prev => !prev)
    }

    return (
        <Box className={classes.commDataContainer}>
            <Box className={classes.commNaDat}>
                <Typography>{commData.name}</Typography>
                <Box className={classes.delete}>
                 <Typography>{new Date(commData.date).toDateString()}</Typography>
                 <DeleteIcon className={classes.delIcon} onClick={() => deleteComm()}/>
                </Box>
            </Box>
            <Typography className={classes.mainComment}>{commData.comment}</Typography>
        </Box>
    )
}

export default Comment
