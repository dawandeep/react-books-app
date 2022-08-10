import React, { useEffect, useState } from 'react'
import './home.css';
import Banner from '../Banner/Banner'
import axios from 'axios';
import { Link } from 'react-router-dom';
export const Home = () => {
  const [books, setBooks]= useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/books')
    .then((res)=>setBooks(res.data)
    )
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
    <Banner/>
    <div className="container mt-3">
        <div className="row mb-2">
        {
            books.map(item => <div key={item.id} className="col-md-4 mb-3">
                 <div className="card" style={{width:"350px"}}>
                 <img src={item.image} className="card-img-top"  alt="books" style={{width:"350px", height:"300px"}}/>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{item.bookname}</h5>
                    <p className="card-text ms-1">Author : <span>{item.author}</span></p>
                    <p className="card-text">Price : <span><i className="fa-solid fa-indian-rupee-sign"></i></span><span>{item.price}</span></p>
                    <Link to={`/manage-books/${item.id}`} className="btn btn-dark">Manage Book</Link>
                  </div>
                  </div>
            </div>
           )
}
       
    </div>
    </div>
    </div>
  )
}
