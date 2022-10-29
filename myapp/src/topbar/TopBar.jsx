import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user=false;
  return (
    <div className='top'>
          <div className="topLeft">
          <i className="topIcon  fa-brands fa-facebook-messenger"></i>
          <i className="topIcon  fa-brands fa-square-twitter"></i>
          <i className="topIcon  fa-brands fa-square-whatsapp"></i>
          <i className="topIcon  fa-brands fa-square-instagram"></i>
          </div>
          <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link to="/" className="link">HOME</Link>
                </li>
                <li className="topListItem">
                <Link to="/" className="link">ABOUT</Link>
                </li>
                <li className="topListItem">
                <Link to="/" className="link">CONTACT</Link>
                </li>
                <li className="topListItem">
                <Link to="/write" className="link">WRITE</Link>
                </li>
                <li className="topListItem">
                  {user && 'LOGOUT'}
                </li>
            </ul>
          </div>
          <div className="topRight">
            {
              user ? (
                 <img 
                 className="topImg"
                 src="data:image/jpeg;base64,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" alt=""/>

              ) : (
                <ul className="topList">
                 <li className="topListItem">
                 <Link className="link" to="/login" >LOGIN</Link>
                 </li>
                 <li className="topListItem">
                 <Link className="link" to="/register" >REGISTER</Link>
                 </li>

                </ul>
              )
            }
            <i className=" topSearchIcon fa-brands fa-searchengin"></i>
          </div>

    </div>
  )
}
