import React, { Suspense } from 'react';
// import {render} from 'react-dom'
import TopBar from './topbar/TopBar';
import Home from './pages/home/Home'

import Login from './pages/login/Login';
import Register from './pages/register/Register'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import {
  BrowserRouter ,
  Router,
  Route,
  Routes,
  

} from "react-router-dom";


const App = () => {
  const user= false;
  return(
//   <Router>
//   <Suspense>
//   <Routes>
//     <Route path="/" element={<Home />}>
//       {/* <Route index element={<Home />} /> */}
//       <Route path="login" element={<Login />} />
//       {/* <Route path="contact" element={<Contact />} /> */}
//       {/* <Route path="*" element={<NoPage />} /> */}
//     </Route>
//   </Routes>
//   </Suspense>
// </Router>

 <BrowserRouter>
   <TopBar/>
   <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/login' element={user ? <Home/> :<Login />} />
    <Route path='/register' element={user ? <Home/> :<Register />} />
    <Route path='/write' element={user ? <Write/> :<Login />} />
    <Route path='/settings' element={user ? <Settings/> :<Login />} />
    <Route path='/post/:postId' element={< Single/>} />
   </Routes>
 </BrowserRouter>
);
}

    
  
   
      
        
      

  
  

  


export default App;
