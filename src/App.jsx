import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


// import {React , createContext} from "react";
// import './index.css'; 
// import { BrowserRouter , Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Dashboard from './Pages/Dashboard';

// const MyContext = createContext();

// function App() {
//   const values = {

//   }
//   return (
//     <>
//       <BrowserRouter>
//         <MyContext.Provider value={values}>
//           <section className='main flex'>
//             <div className='sidebarWrapper w-[15%]'>
//               <Sidebar />
//             </div>

//             <div className='content_Right w-[85%]'>
//               <Routes>
//                 <Route path='/' exact={true} element={<Dashboard />} />
//               </Routes>
//             </div>
//           </section>
//         </MyContext.Provider>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App
