import '../styles/pages/Post.css'
import Comment from '../components/Comment'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Post() {
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(`http://localhost:3000/posts/${id}`)
        setPost(res.data)
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id])

  const handleAddCommentClick = () => {
    console.log('display the dialog')
  }

  if (isLoading) {
    return (
      <main id='post'>
        <p>Loading...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main id='post'>
        <p>An error occured while fetching the post!</p>
        <p>{error}</p>
      </main>
    )
  }

  return (
    <main id='post'>
      <div className='coverImageContainer'>
        <img
          src={
            post.coverImgUrl ||
            'https://web.dev/static/blog/web-platform-05-2024/hero.png'
          }
          alt={post.title}
        />
      </div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <h2>Comments</h2>

      <div className='comments'>
        {/* todo: display a model on this button click */}
        <button className='filled addComment' onClick={handleAddCommentClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 -960 960 960'
            width='24px'
          >
            <path d='M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z' />
          </svg>
          <span>Add comment</span>
        </button>

        {post.comments.length === 0 && (
          <p>There are no comments on this post.</p>
        )}
        {post.comments.length > 0 &&
          post.comments.map((comment) => (
            <Comment
              key={comment._id}
              content={comment.content}
              author={comment.author}
              updatedAt={comment.updatedAt}
            />
          ))}
      </div>
    </main>
  )
}
