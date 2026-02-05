import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/StudentProfile.css'

const StudentProfile = ({user}) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [stats, setStats] = useState({ totalPosts: 0, activeRequests: 0, completedTutoring: 0 })

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/v1/students/getposts')
                setPosts(response.data)
                setStats({
                    totalPosts: response.data.length,
                    activeRequests: response.data.filter(post => post.status === 'active').length,
                    completedTutoring: response.data.filter(post => post.status === 'completed').length
                })
            } catch (error) {
                console.error('Error fetching posts:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    const handleEdit = (postId) => {
        // Navigate to edit page or open edit modal
        console.log('Edit post:', postId)
        // You can implement navigation to edit page here
    }

    const handleDelete = async (postId) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await axios.delete(`/api/v1/students/posts/${postId}`)
                setPosts(posts.filter(post => post._id !== postId))
                setStats(prev => ({ ...prev, totalPosts: prev.totalPosts - 1 }))
            } catch (error) {
                alert('Failed to delete post. Please try again.')
            }
        }
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    if (loading) {
        return (
            <div className="profile-container">
                <div className="empty-state">
                    <h3>Loading your profile...</h3>
                </div>
            </div>
        )
    }

    return (
        <div className='profile-container'>
            {/* Profile Header */}
            <div className='profile-header'>
                <h1 className='profile-title'>My Profile</h1>
                <p className='profile-subtitle'>Manage your tutoring requests and track your progress</p>
                
                <div className='profile-stats'>
                    <div className='stat-item'>
                        <span className='stat-number'>{stats.totalPosts}</span>
                        <span className='stat-label'>Total Posts</span>
                    </div>
                    <div className='stat-item'>
                        <span className='stat-number'>{stats.activeRequests}</span>
                        <span className='stat-label'>Active Requests</span>
                    </div>
                    <div className='stat-item'>
                        <span className='stat-number'>{stats.completedTutoring}</span>
                        <span className='stat-label'>Completed</span>
                    </div>
                </div>
            </div>

            {/* Posts Section */}
            <div className='posts-section'>
                <div className='section-header'>
                    <h2 className='section-title-post'>Your Tutoring Requests</h2>
                    <Link to='/createpost' className='btn btn-primary'>
                        + Create New Post
                    </Link>
                </div>

                {posts.length === 0 ? (
                    <div className='empty-state'>
                        <h3>No posts yet</h3>
                        <p>Create your first tutoring request to get started!</p>
                        <Link to='/createpost' className='btn btn-primary'>
                            Create Your First Post
                        </Link>
                    </div>
                ) : (
                    <div className='post-container'>
                        {posts.map((post) => (
                            <div key={post._id} className='post-card'>
                                <div className='post-header'>
                                    <img 
                                        src={post.studentInfo?.profilePhoto || '/default-avatar.png'} 
                                        alt={post.studentInfo?.fullName}
                                        className='post-image' 
                                    />
                                    <div className='post-student-info'>
                                        <h3>{post.studentInfo?.fullName || 'Student'}</h3>
                                        <span className='post-date'>
                                            {formatDate(post.createdAt || new Date())}
                                        </span>
                                    </div>
                                </div>

                                <div className='post-content'>
                                    <div className='post-details'>
                                        <div className='post-detail-item'>
                                            <div className='post-detail-label'>Qualification</div>
                                            <div className='post-detail-value'>{post.studentQualification}</div>
                                        </div>
                                        <div className='post-detail-item'>
                                            <div className='post-detail-label'>Category</div>
                                            <div className='post-detail-value'>{post.selectedCategory}</div>
                                        </div>
                                        <div className='post-detail-item'>
                                            <div className='post-detail-label'>Subject</div>
                                            <div className='post-detail-value'>{post.selectedSubject}</div>
                                        </div>
                                        <div className='post-detail-item'>
                                            <div className='post-detail-label'>Offer</div>
                                            <div className='post-detail-value'>{post.offer}</div>
                                        </div>
                                    </div>
                                    
                                    {post.requirement && (
                                        <div className='post-detail-item' style={{gridColumn: '1 / -1', marginTop: '10px'}}>
                                            <div className='post-detail-label'>Requirements</div>
                                            <div className='post-detail-value'>{post.requirement}</div>
                                        </div>
                                    )}
                                </div>

                                <div className='post-actions'>
                                    <button 
                                        onClick={() => handleEdit(post._id)}
                                        className='btn btn-outline'
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(post._id)}
                                        className='btn btn-danger'
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default StudentProfile