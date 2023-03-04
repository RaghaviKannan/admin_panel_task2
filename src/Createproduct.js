import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'

function Createproduct() {
    const formik = useFormik({
        initialValues :{
            pname :"",
            pprice :"",
            pimg:""
        },
        onSubmit:async(values)=>{
            try {
                await axios.post("https://634c0872317dc96a308fd6f9.mockapi.io/products",values)
                formik.resetForm()
                alert("Product added")
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Create product</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>Product name</label>
                            <input name="pname" type="text" className="form-control" value={formik.values.pname} onChange={formik.handleChange}/>
                        </div>
                        <div className="col-lg-4">
                            <label>Product price</label>
                            <input name="pprice" type="number" className="form-control" value={formik.values.pprice} onChange={formik.handleChange} />
                        </div>
                        <div className="col-lg-4">
                            <label>Image link</label>
                            <input name="pimg" type="text" className="form-control" value={formik.values.pimg} onChange={formik.handleChange}/>
                        </div>
                        <div>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Createproduct