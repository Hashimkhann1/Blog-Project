import { Box, Button, makeStyles, TextareaAutosize } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { getComment, newComment } from '../../service/api'
import Comment from './Comment'
 

const useStyle = makeStyles({
    component : {
        marginTop : 100,
        display : 'flex',
        // textAlign : 'center',
        alignItems : 'center'

    },
    image : {
        width : 40,
        height : 40,
        borderRadius : '50%',
    },
    textarea : {
        width : '95%',
        border : '1px solid #ededed',
        outline : 'none',
        fontSize : 18,
        padding : '10px 0px 0px 10px',
        margin : '0px 10px 0px 10px'
    },
    btn : {
        width : 100,
        height : 45,
        marginLeft : '6px'
    }
})

const initialValue = {
    name : '',
    postCId : '',
    date : new Date(),
    comment : ''
}


const Comments = ({post}) => {

    const [commment , setComment] = useState(initialValue)
    const [GComment , setGComment] = useState([])
    const [SChange , setSChange ] = useState(false)

    const classes = useStyle()
    // const history = useHistory()

    useEffect(() => {
        const getCommData = async () => {
            let resGetComment = await getComment(post._id)
            setGComment(resGetComment)
        }
        getCommData()
    }, [post , setSChange])

    const hasndelrchange = (e) => {
        setComment({
            ...commment,
            name :post.username,
            postCId :post._id,
            comment : e.target.value
        })

    }

    const postComment = async () => {
        await newComment(commment)
        setSChange(prev => !prev)
    }


    const url = 'https://static.thenounproject.com/png/12017-200.png'
    return (
        <Box>
            <Box className={classes.component}>
                <img className={classes.image} src={url} alt='db'/>
                <TextareaAutosize className={classes.textarea} onChange={(e) => hasndelrchange(e)} rowsMin={4} placeholder='Write comments'/>
                <Button variant='contained' onClick={() => postComment()} color='primary' className={classes.btn}>Post</Button>
            </Box>
            {
                GComment && GComment.map(comm => (
                    <Comment commData={comm} setSChange={setSChange}/>
                ))
            }
        </Box>
    )
}

export default Comments
