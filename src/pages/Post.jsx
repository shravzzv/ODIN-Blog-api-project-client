import '../styles/pages/Post.css'
import Comment from '../components/Comment'

export default function Post() {
  const handleAddCommentClick = () => {
    console.log('display the dialog')
  }

  return (
    <main id='post'>
      <div className='coverImageContainer'>
        <img
          src='https://web.dev/static/blog/web-platform-05-2024/hero.png'
          alt='card cover'
        />
      </div>
      <h1>Post heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        quibusdam commodi nostrum odio provident ea maiores dolorum, sunt
        pariatur, quod similique tempore in ipsum voluptas nam. Repellendus
        porro dolorum expedita rem dicta! Iusto amet, possimus saepe enim ipsa
        rerum magnam repellat porro odit odio esse fugit deleniti. Excepturi
        fugit incidunt fuga ratione? Temporibus reprehenderit amet, quasi
        corrupti dolorem sit vitae soluta neque doloribus illum dicta non
        distinctio saepe error ab officiis totam molestiae odio? Magnam magni
        quas eius fuga eligendi quisquam aperiam saepe voluptates ducimus. Eos
        consequatur delectus eveniet sit expedita rerum ad, excepturi quaerat
        porro veritatis vero saepe doloribus distinctio sequi ipsum aspernatur
        dolorem alias, mollitia consequuntur quos quod, nobis vel. Officia sunt
        sed ratione fuga porro odio eius quis illum consequatur praesentium
        aspernatur commodi laudantium repudiandae quae, tempora optio quam
        incidunt amet perspiciatis. Vel minima delectus suscipit esse nisi totam
        incidunt quos voluptatum autem placeat deleniti ut, fugiat nihil
        mollitia maxime cupiditate sequi atque ad? Architecto obcaecati quasi
        laborum, sequi voluptas voluptatibus aliquid rerum ullam. Eaque
        accusantium repudiandae aperiam repellat delectus optio pariatur
        corporis. Soluta maxime, eius minima obcaecati iure quisquam doloremque
        illo fugiat asperiores illum nemo perferendis sit ratione temporibus
        accusamus recusandae quae maiores expedita corporis dolorum laborum id
        magnam in velit. Ut, dolor voluptate officia quod asperiores
        consequuntur dicta nihil sequi, omnis nemo expedita dolores magni
        tempore a quae praesentium culpa ipsam quos at esse velit repudiandae
        beatae quidem labore. Nulla cupiditate porro a cumque tempora
        repellendus temporibus itaque rerum, cum corporis et quidem odit, sunt
        doloremque, quos ab saepe eius corrupti at quia debitis! Quam fugiat
        laborum at saepe animi, quaerat mollitia praesentium molestias, harum
        atque numquam. Nesciunt natus maxime eveniet ipsam, saepe fugit optio
        adipisci repellendus! Accusantium labore similique vero minus vel ea cum
        facilis reprehenderit sint alias esse ullam repellendus expedita in
        soluta fugit rerum fuga quo maiores culpa, ut rem? Assumenda odit soluta
        consequuntur saepe non suscipit adipisci, hic minima neque laborum
        eaque. Provident, at nemo dignissimos assumenda explicabo in
        consequuntur ducimus sit, hic ex blanditiis recusandae! Optio laboriosam
        ex obcaecati? Ex, sint eligendi, labore sequi ut molestiae neque maiores
        quo necessitatibus, voluptate aperiam maxime ipsum deleniti voluptatem
        aliquid voluptatum id. Quos ipsum eaque iure quidem nemo, sapiente,
        adipisci cumque dicta commodi officiis tempora quas modi. Reprehenderit
        fugiat soluta aliquid alias deserunt nostrum neque nobis dicta
        explicabo? Nobis architecto vero eos. Non amet adipisci aliquam, sit a
        odit laudantium, placeat accusantium nobis saepe impedit quasi vel minus
        modi suscipit tenetur magnam aliquid recusandae laborum? Provident,
        atque vero. Excepturi hic id voluptatibus ullam libero doloribus nisi a
        maiores provident, ad cumque velit nostrum consequatur. Corporis sint
        dicta cupiditate quam eos nisi tempora odit minima ipsum totam officiis
        suscipit, in omnis ab magnam officia quos ratione velit hic. Dolorum,
        velit quo. Quo odit facilis in odio, vel fugiat adipisci, alias
        asperiores necessitatibus nobis tenetur eaque, maiores quam. Enim
        nostrum officiis accusamus, molestias tempore quas labore aperiam! Odit
        id, recusandae labore hic iure ex harum iste minima itaque repellat esse
        laborum, mollitia qui culpa dolore?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        laudantium odio nisi sed animi quibusdam, modi consequuntur cum facere
        atque. Voluptatibus id quos nesciunt itaque neque consequuntur debitis
        eos repellat?
      </p>
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
        <Comment />
        <Comment />
      </div>
    </main>
  )
}
