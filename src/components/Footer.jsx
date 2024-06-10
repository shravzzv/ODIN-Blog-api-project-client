import '../styles/components/Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className='top'>
        <div className='container first'>
          <h2>Blog</h2>
          <p>
            We want to help you build beautiful, accessible, fast, and secure
            websites that work cross-browser, and for all of your users. This
            site is our home for content to help you on that journey, written by
            members of the Chrome team, and external experts.
          </p>
        </div>

        <div className='container'>
          <p className='heading'>Contribute</p>
          <ul>
            <li>
              <a href='#'>File a bug</a>
            </li>
            <li>
              <a href='#'>See open issues</a>
            </li>
          </ul>
        </div>

        <div className='container'>
          <p className='heading'>Related content</p>
          <ul>
            <li>
              <a href='#'>The Odin Project</a>
            </li>
            <li>
              <a href='#'>This assignment</a>
            </li>
            <li>
              <a href='#'>Project repository</a>
            </li>
          </ul>
        </div>

        <div className='container'>
          <p className='heading'>Connect</p>
          <ul>
            <li>
              <a href='#'>LinkedIn</a>
            </li>
            <li>
              <a href='#'>Instagram</a>
            </li>
            <li>
              <a href='#'>YouTube</a>
            </li>
            <li>
              <a href='#'>GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className='bottom'>
        <div className='left'>
          <ul>
            <li>
              <a href='#'>Terms</a>
            </li>
            <li>
              <a href='#'>Privacy</a>
            </li>
          </ul>
        </div>
        <div className='right'>
          <a href='#'>Home</a>
        </div>
      </div>
    </footer>
  )
}
