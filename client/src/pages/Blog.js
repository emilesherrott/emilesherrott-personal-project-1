import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
    //https://developers.google.com/blogger/docs/3.0/using

    const [blogInfo, setBlogInfo] = useState()

    const apiKey = 'AIzaSyBmM74aIIeFAG1dv-o0MeLlZMVXxUp3Kjw'
    const blogID = '2022'

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${blogID}?key=${apiKey}`)
                setBlogInfo(response)
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [])

    console.log(blogInfo)

    return (
        <h1 className="main-font">Blog</h1>
    )
}

export default Blog