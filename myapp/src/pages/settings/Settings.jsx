import "./settings.css"
import Sidebar from '../../sidebar/Sidebar'

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className="settingsDeleteTitle">Delete your account</span>
            </div>
            <form  className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img 
                    src="data:image/jpeg;base64,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" alt="" />
                    <label htmlFor="fileInput">
                    <i className=" settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileInput " style={{display:"none"}} />
                </div>
                <label >Username</label>
                <input type="text" placeholder="saurav" />
                <label >Email</label>
                <input type="email" placeholder="sauravbahl03@gmail.com" />
                <label >Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
