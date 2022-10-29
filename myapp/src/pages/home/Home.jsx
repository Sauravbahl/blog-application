import "./home.css"
import Header from "../../header/Header"
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import TopBar from "../../topbar/TopBar";


export default function Home() {
  return (
    <>
    <TopBar/>
    <Header/>

    <div className="home">
      <Posts/>
      <Sidebar/>
    </div>
    </>
  );
}


