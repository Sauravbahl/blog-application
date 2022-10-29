import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img 
        className="writeImg"
        src="https://images.unsplash.com/photo-1603408639326-fad10b8fbc1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZyUyMHdheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className=" writeIcon fa-regular fa-address-book"></i>
                </label>
                <input type="file" id="fileInput"  style={{display:"none"}}/>
                <input type="text" placeholder="Title"  className="writeInput" autoFocus={true} />

            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>

    </div>
  )
}
