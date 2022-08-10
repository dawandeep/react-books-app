import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Addbook = () => {
    const navigate = useNavigate();
     const formSchema = yup.object({
   bookname:yup.string("Enter Book Name")
   .required("Book name cannot blank")
   .min(3,'Please enter at least 3 characters'),
   image:yup.string()
   .required("Please enter the image url"),
   author:yup.string()
   .required("Please enter the author name")
   .min(3,'Please enter at least 3 characters'),
   publisher:yup.string()
   .required("Please enter the publisher"),
   price:yup.string()
   .required("Please enter the price")
  });
    const formik = useFormik({
        initialValues:{
            bookname:'',
            image:'',
            author:'',
            publisher:'',
            price:''
        },
         onSubmit: values =>{
           axios.post("http://localhost:3001/books",{
            "bookname":values.bookname,
            "image":values.image,
            "author":values.author,
            "publisher":values.publisher,
            "price":values.price
           })
           .then((res)=>console.log("Book Store Successfuly"))
           .then((data)=> {
            navigate('/home',{ replace: true })
            
           })
         },
        validationSchema:formSchema
    })
 
  return (
    <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="bg-dark text-light py-3 text-center rounded">
                        <h2>Add Book</h2>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mt-2">
                            <input id="bookname" name="bookname" type="text" value={formik.values.bookname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Book Name" />
                            {formik.errors.bookname && formik.touched.bookname ? <span className="text-danger">{formik.errors.bookname}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="image" name="image" type="text" value={formik.values.image} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Image URL" />
                            {formik.errors.image && formik.touched.image ? <span className="text-danger">{formik.errors.image}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="author" name="author" type="text" value={formik.values.author} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Author Name" />
                            {formik.errors.author && formik.touched.author ? <span className="text-danger">{formik.errors.author}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="publisher" name="publisher" type="text" value={formik.values.publisher} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Publisher Name" />
                            {formik.errors.publisher && formik.touched.publisher ? <span className="text-danger">{formik.errors.publisher}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="price" name="price" type="text" value={formik.values.price} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="price" />
                            {formik.errors.price && formik.touched.price ? <span className="text-danger">{formik.errors.price}</span> : null}
                        </div>
                        <div className="mt-2 text-center">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

  )
}
