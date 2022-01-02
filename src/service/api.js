import axios from 'axios';

const url = 'http://localhost:8001'


export const createPost = async (post) => {
	// console.log(post);
	try {
		return await axios.post(`${url}/create` , post)
	} catch (error) {
		console.log('error while calling createPost api' , error);
	}
} 

export const getAllPost = async (params) => {
	try {
		let responce = await axios.get(`${url}/posts${params}`);
		return responce.data;
	} catch (error) {
		console.log('error while calling getAllPost from api' , error);
	}
}

export const getpostId = async (id) => {
	try {
		let responceId = await axios.get(`${url}/postId/${id}`)
		return responceId.data;
	} catch (error) {
		console.log('error while calling getpostId from api' , error);
	}
}

export const updatePost = async (id , UpdatePost) => {
	try {
		await axios.post(`${url}/updatePost/${id}` , UpdatePost)
	} catch (error) {
		console.log('error while calling updateBlog from api' , error);
	}
}


export const deleteBlogPost = async (id) => {
	try {
		await axios.delete (`${url}/delete/${id}`)
	} catch (error) {
		console.log('error while calling deleteBlog from api' , error);
	}
}

export const newComment =  async (CData) => {
	console.log(CData)
	try {
		return await axios.post(`${url}/comment/new` , CData)
	} catch (error) {
		console.log('error while claing newComment api' , error)
	}
}

export const getComment = async (id) => {
	try {
		let responceG = await axios.get(`${url}/gcomment/${id}`)
		return responceG.data
	} catch (error) {
		console.log('error while calling getComment',  error)
	}
}

export const DeleteComment = async (id) => {
	try {
		return await axios.delete(`${url}/delete/comment/${id}`)
	} catch (error) {
		console.log('error while deleting comment from api')
	}
}




///// . fro user registertion /////.//


export const CreateUserDB = async (CUdata) => {
	try {
		return await axios.post(`${url}/registir/user` , CUdata)
	} catch (error) {
		console.log('error while calling CreateUserDB from api' , error)
	}
}