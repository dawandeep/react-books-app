import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './manage.css';
const Manage = () => {
   let navigate = useNavigate()
   let {bookId}= useParams()
   const [books,setBooks]=useState([]);
   useEffect(()=>{
    axios.get(`http://localhost:3001/books/${bookId}`)
    .then((res)=>setBooks([res.data]))
    .catch((err)=>console.log(err))
   },[bookId])
// console.log(books);
const deleteBook=(id)=>{
  axios.delete(`http://localhost:3001/books/${id}`)
  .then(res=>{
       navigate('/home')
  })
  .catch((err)=>console.log(err))
}
return (
   <div className="container mt-3">
    <div className="row">
    <h3 className='text-warning fw-bold'>Welcome to Book Spot</h3>
  
  <div className="card text-center">
  <div className="card-header fw-bold">
    MANAGE BOOK
  </div>
  {
     books.map(item=><div key={item.id} className="card-body">
    <img src={item.image} className="card-img-top"  alt="..." style={{width:"320px", height:"300px"}}/>
    <h4 className="card-title fw-bold text-warning">Title : <span className='text-warning'>{item.bookname}</span></h4>
    <h4 className="card-title">Author :<span>{item.author}</span></h4>
    <h4 className="card-title">Publisher :<span>{item.publisher}</span></h4>
    <h4 className="card-title">Price :<span>{item.price}</span></h4>
    <p className="card-text"></p>
    <button className="btn btn-danger px-4" onClick={()=>deleteBook(item.id)}>Delete</button>
    <Link to={"/home"} className="btn btn-dark px-4 ms-3">Back</Link>
  </div>
  )}
</div>

    
  
  
   
        
    </div>
   </div>
 );
}

export default Manage
