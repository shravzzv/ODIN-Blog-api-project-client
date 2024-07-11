import '../styles/components/Card.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

Card.propTypes = {
  coverImgUrl: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  _id: PropTypes.string,
}

export default function Card({ coverImgUrl, title, content, _id }) {
  return (
    <div className='card'>
      <div className='imageContainer'>
        <Link to={`/post/${_id}`}>
          <img
            src={
              coverImgUrl ||
              'https://web.dev/static/blog/web-platform-05-2024/hero.png'
            }
            alt={title}
          />
        </Link>
      </div>
      <div className='content'>
        <h2>{title}</h2>
        <p>{content.substring(0, 100)}...</p>
      </div>
    </div>
  )
}
