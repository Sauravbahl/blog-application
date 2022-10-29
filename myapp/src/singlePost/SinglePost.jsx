import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
            className="singlePostImg"
            src="https://ap.rdcpix.com/9ce33626d0c4c930e173cd17f6571273l-m1744872420od-w480_h360_x2.jpg" alt=""  />
            <h1 className="singlePostTitle">HELLO FRIENDS...WELCOME TO OUR WEBSITE...
            <div className="singlePostEdit">
            <i className="singlePostIcon   fa-solid fa-trash"></i>
            <i className=" singlePostIcon fa-solid fa-file-pen"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
              <span className="singlePostAuthor">Author: <b>Safak</b></span>
              <span className="singlePostDate">1 hour Ago</span>


            </div>
            <p className="singlePostDesc">Hope you are enjoying our website by using it.upload your blogs daily here and get rewarded everyday with exciting prices!!!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quasi aspernatur possimus tempore obcaecati necessitatibus blanditiis suscipit voluptatem impedit laborum, beatae a maiores, nemo ex quia, doloremque delectus corrupti aliquid.</p>

            

        </div>

    </div>
  )
}
