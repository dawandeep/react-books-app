import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import { Addbook } from './Compoents/AddBook/Addbook';
import Header from './Compoents/Header/Header';
import { Home } from './Compoents/Home/Home';
import React from "react";
import Manage from './Compoents/Manage/Manage';
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Header/>
     {/* <Suspense fallback={<div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}> */}

      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/add-books' element={<Addbook/>}></Route>
        <Route path='/manage-books/:bookId' element={<Manage/>}></Route>
      </Routes>
      {/* </Suspense> */}
     </BrowserRouter>
    </div>
  );
}

export default App;
