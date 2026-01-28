import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/StudentProfile.css'


const StudentProfile = () => {
    const [posts, setPosts] = useState()
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/v1/students/getposts')
                setPosts(response.data)
            } catch (error) {
                console.error('Error fetching posts:', error)
            }
        }
        fetchPosts()
    }, [])

    return (
        <>
            <h1>Your Posts</h1>
            <div className='post-container'>
                {posts?.map((post) => (
                    <div key={post._id} className='posts'>
                        <div className="post-top">
                            <img src={post.studentInfo.profilePhoto} className='post-image' />
                            <h3 className='post-student-name'>{post.studentInfo.fullName}</h3>
                        </div>

                        <div className="post-bottom">
                            <div className='post-right'>

                                <p>{post.studentQualification}</p>
                                <p>{post.selectedCategory}</p>
                                <p>{post.selectedSubject}</p>
                            </div>
                            <div className='post-left'>
                                <p>{post.requirement}</p>
                                <p>{post.offer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to='/createpost' className='btn btn-primary'>Create a New Post</Link>
        </>
    )
}

export default StudentProfile