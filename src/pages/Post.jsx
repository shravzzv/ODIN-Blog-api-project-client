import axios from 'axios'
import '../styles/pages/Post.css'
import PropTypes from 'prop-types'
import Comment from '../components/Comment'
import { useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

Post.propTypes = {
  isAuthenticated: PropTypes.bool,
}

export default function Post({ isAuthenticated }) {
  const { id } = useParams()
  const commentDialogRef = useRef(null)
  const [post, setPost] = useState(null)
  const [error, setError] = useState(false)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(
          `https://odin-blog-api-project-api.glitch.me/posts/${id}`
        )
        setPost(res.data)
        setComments(res.data.comments)
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id])

  const handlePostComment = async (e) => {
    try {
      e.preventDefault()
      const token = JSON.parse(localStorage.getItem('token'))

      const res = await axios.post(
        `https://odin-blog-api-project-api.glitch.me/comments/${id}`,
        { content: comment },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      )
      commentDialogRef.current.close()
      setComment('')
      setComments([res.data, ...comments])
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteComment = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem('token'))

      await axios.delete(
        `https://odin-blog-api-project-api.glitch.me/comments/${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      )

      const updatedComments = comments.filter((comment) => comment._id !== id)
      setComments(updatedComments)
    } catch (error) {
      console.error('Error deleting comment:', error)
    }
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
      {isAuthenticated ? (
        <>
          <button
            className='filled addComment'
            onClick={() => commentDialogRef.current.showModal()}
          >
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
          <dialog ref={commentDialogRef}>
            <form onSubmit={handlePostComment}>
              <div className='formControl'>
                <textarea
                  name='content'
                  id='content'
                  cols='30'
                  rows='10'
                  placeholder='type a comment...'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div className='actions'>
                <button
                  className='text'
                  type='button'
                  onClick={() => commentDialogRef.current.close()}
                >
                  Cancel
                </button>
                <button className='filled' type='submit'>
                  Submit
                </button>
              </div>
            </form>
          </dialog>
        </>
      ) : (
        <p>You need to be authenticated to post comments.</p>
      )}

      <div className='comments'>
        {comments.length === 0 && <p>There are no comments on this post.</p>}
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment
              key={comment._id}
              id={comment._id}
              content={comment.content}
              author={comment.author}
              updatedAt={comment.updatedAt}
              showActions={
                comment.author._id == JSON.parse(localStorage.getItem('userId'))
              }
              remove={handleDeleteComment}
            />
          ))}
      </div>
    </main>
  )
}
