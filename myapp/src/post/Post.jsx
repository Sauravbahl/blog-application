import "./post.css"

export default function post() {
  return (
    <div className="post">
    <img
    className="postImg"
       src="https://manula.r.sizr.io/large/user/8766/img/schermafbeelding-2016-11-11-om-08-10-02.png" alt="" />
       <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>

          </div>
          <span className="postTitle">Upload  here and enjoy....</span>
          <hr/>
          <span className="postDate">1 hour ago</span>
       </div>
       <p className="postDesc">
        hello this is discriptio  please write here share thoughts.....hello everyone

       </p>

    </div>
  )
}
