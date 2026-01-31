import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/StudentProfile.css'


const StudentProfile = ({user}) => {
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
        <div className='parent'>
            <h1>Your Posts</h1>
            <div className='post-container'>
                {posts?.map((post) => (
                    <div key={post._id} className='posts'>
                        <div className='post'>
                            <div className="post-top">
                                <img src={post.studentInfo.profilePhoto} className='post-image' />
                                <h3 className='post-student-name'>{post.studentInfo.fullName}</h3>
                            </div>

                            <div className="post-bottom">
                                <div className='post-right'>
                                    <p>Your Qualification : {post.studentQualification}</p>
                                    <p>Category : {post.selectedCategory}</p>
                                    <p>Subject : {post.selectedSubject}</p>
                                </div>
                                <div className='post-left'>
                                    <p>Requirements : {post.requirement}</p>
                                    <p>Offer : {post.offer}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to='/createpost' className='btn btn-primary'>Create a New Post</Link>
        </div>
    )
}

export default StudentProfile