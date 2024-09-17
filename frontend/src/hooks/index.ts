import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Blog {
    content : string,
    title : string,
    id : string,
    author : {
        name : string
    }
}

export const useBlogs = () => {

    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers : {
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(response => {
            setBlogs(response.data.blogs);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error while fetching BLogs: ' , error);
            setLoading(false);
        })
    },[]);

    return {
        loading,
        blogs
    }
}

export const useBLog = ({id} : {id : string}) => {
    const [blog , setBlog] = useState<Blog>();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers : {
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(response => {
            setBlog(response.data.blog);
            setLoading(false);
        })
        .catch(error => {
            console.error("error while viewing the blog!" , error);
            setLoading(false);
        })
    },[id]); //when that blo with that specific id is clicked then we do this request 

    return {
        blog,
        loading
    }
}