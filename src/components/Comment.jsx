import '../styles/components/Comment.css'

export default function Comment() {
  return (
    <div className='comment'>
      <div className='author'>
        <div className='profilePicContainer'>
          <img
            src='https://web.dev/static/blog/web-platform-05-2024/hero.png'
            alt='card cover'
          />
        </div>
        <p className='username'>John Doe</p>
        <p className='time'>3 days ago</p>
      </div>
      <p className='content'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste fugit
        adipisci, iusto distinctio mollitia laboriosam officiis ipsam, possimus
        commodi vero voluptas fugiat dolorem harum consequuntur quidem dolores
        libero? Assumenda, fuga!
      </p>
    </div>
  )
}
