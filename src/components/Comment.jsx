import '../styles/components/Comment.css'
import PropTypes from 'prop-types'

Comment.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.object,
  updatedAt: PropTypes.string,
  showActions: PropTypes.bool,
  remove: PropTypes.func,
}

export default function Comment({
  id,
  content,
  author,
  updatedAt,
  showActions,
  remove,
}) {
  const getDateAgo = (date) => {
    const now = new Date()
    const diff = now - date

    // Extract units
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)

    // Format the string based on the difference
    if (seconds < 60) {
      return 'now'
    } else if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`
    } else if (days < 7) {
      return `${days} day${days !== 1 ? 's' : ''} ago`
    } else {
      return `${weeks} week${weeks !== 1 ? 's' : ''} ago`
    }
  }

  return (
    <div className='comment'>
      <div className='author'>
        <div className='profilePicContainer'>
          <img
            src={
              author.profilePicUrl ||
              'https://res.cloudinary.com/dmt9s5xlh/image/upload/v1719130473/defaultProfile_vgn5sr.png'
            }
            alt={'comment author'}
          />
        </div>
        <p className='username'>{author.firstName + ' ' + author.lastName}</p>
        <p className='time'>{getDateAgo(new Date(updatedAt))}</p>
      </div>
      <p className='content'>{content}</p>
      {showActions && (
        <div className='actions'>
          <button className='outlined' onClick={() => remove(id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  )
}
