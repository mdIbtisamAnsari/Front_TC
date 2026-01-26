import axios from 'axios'
import { useEffect, useState } from 'react'


const StudentProfile = () => {
    const [posts, setPosts] = useState()
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/v1/students/getposts')
                console.log(response)
                setPosts(response.data)
            } catch (error) {
                console.error('Error fetching posts:', error)
            }
        }
        fetchPosts()
    }, [])

    return (
        <>
        <h2>Your Posts</h2>
        <div>
            {posts?.map((post) => (

                <div key={post._id}>
                    <h3>{post.studentID}</h3>
                    <p>{post.studentQualification}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default StudentProfile