import '../styles/pages/Home.css'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:3000/posts')
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

  return (
    <main id='home'>
      <div className='hero'>
        <div className='imageContainer'>
          <img
            src='https://web.dev/static/images/blog-header_720.png'
            alt='hero'
          />
        </div>
        <div className='content'>
          <h1>Blog</h1>
          <p>Our latest news, updates, and stories for developers</p>
        </div>
      </div>
      <div className='cards'>
        {posts.length === 0 && <p>Loading...</p>}

        {posts.map((post) => (
          <Card
            key={post._id}
            coverImgUrl={post.coverImgUrl}
            title={post.title}
            content={post.content}
            _id={post._id}
          />
        ))}
      </div>
    </main>
  )
}
