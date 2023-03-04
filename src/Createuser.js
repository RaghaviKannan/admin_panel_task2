import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'

function Createuser() {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            country: "",
            state: "",
            city: "",
            dob: "",
            phone: "",
            gender: ""
        },
        validate: (values) => {
            var error = {};

            if (!values.firstname) {
                error.firstname = "Please enter your firstname"
            }
            if (values.firstname && values.firstname.length < 3 || values.firstname.length > 15) {
                error.firstname = "Please enter value between 3 and 15"
            }
            if (!values.lastname) {
                error.lastname = "Please enter your lastname"
            }
            if (values.lastname && values.lastname.length < 3 || values.lastname.length > 15) {
                error.lastname = "Please enter value between 3 and 15"
            }
            if (!values.email) {
                error.email = "Please enter your email"
            }
            if (values.email && !(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(values.email)) {
                error.email = "Please enter a valid email"
            }
            if (!values.country){
                error.country = "Please select a Country"
            }
            if (!values.state){
                error.state = "Please select a State"
            }
            if (!values.city){
                error.city = "Please select a City"
            }
            if (!values.dob){
                error.dob = ""
            }
            if (new Date().getFullYear() - values.dob.split("-")[0] < 18){
                error.dob = "You must be above 18"
            }
            if (!values.phone){
                error.phone = "Please enter your number"
            }
            if (values.phone && values.phone.toString().length != 10){
                error.phone = "Please enter a valid number"
            }            
            return error;
        },
        onSubmit: async (values) => {
            try {
                await axios.post("https://634c0872317dc96a308fd6f9.mockapi.io/users", values)
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Create user</h1>
            </div>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>First name</label>
                            <input name="firstname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className={`form-control ${formik.touched.firstname && formik.errors.firstname?"error-box" : ""} ${formik.touched.firstname && !formik.errors.firstname ? "success-box" : ""}`} />
                        </div>
                        {
                            formik.touched.firstname && formik.errors.firstname ? <span style={{color:"red"}}>{formik.errors.firstname}</span> : null
                        }
                        <div className="col-lg-4">
                            <label>Last name</label>
                            <input name="lastname" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className={`form-control ${formik.touched.lastname && formik.errors.lastname?"error-box" : ""} ${formik.touched.lastname && !formik.errors.lastname ? "success-box" : ""}`}/>
                        </div>
                        {
                            formik.touched.lastname && formik.errors.lastname ? <span style={{color:"red"}}>{formik.errors.lastname}</span> : null
                        }
                        <div className="col-lg-4">
                            <label>Email</label>
                            <input name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className={`form-control ${formik.touched.email && formik.errors.email?"error-box" : ""} ${formik.touched.email && !formik.errors.email ? "success-box" : ""}`} />
                        </div>
                        {
                            formik.touched.email && formik.errors.email ? <span style={{color:"red"}}>{formik.errors.email}</span> : null
                        }
                        <div className="col-lg-4">
                            <label>Country</label>
                            <select name="country" value={formik.values.country} onChange={formik.handleChange} onBlur={formik} className="form-control">
                                <option value="">-select-</option>
                                <option value="India">India</option>
                                <option value="America">America</option>
                                <option value="China">China</option>
                            </select>
                        </div>
                        {
                            formik.touched.country && formik.errors.country ? <span style={{color:"red"}}>{formik.errors.country}</span> : null
                        }
                        <div className="col-lg-4">
                            <label>State</label>
                            <select name="state" value={formik.values.state} onChange={formik.handleChange} className="form-control">
                                <option value="">-select-</option>
                                <option value="India">India</option>
                                <option value="America">America</option>
                                <option value="China">China</option>
                            </select>
                        </div>
                        {
                            formik.touched.state && formik.errors.state ? <span style={{color:"red"}}>{formik.errors.state}</span> : null
                        }
                        <div className="col-lg-4">
                            <label>City</label>
                            <select name="city" value={formik.values.city} onChange={formik.handleChange} className="form-control">
                                <option value="">-select-</option>
                                <option value="India">India</option>
                                <option value="America">America</option>
                                <option value="China">China</option>
                            </select>
                        </div>
                        {
                            formik.touched.city && formik.errors.city ? <span style={{color:"red"}}>{formik.errors.city}</span> : null
                        }
                        <div className="col-lg-4">
                            <label>Date of Birth</label>
                            <input name="dob" value={formik.values.dob} onChange={formik.handleChange} type="date" className="form-control" />
                        </div>
                        {
                            formik.touched.dob && formik.errors.dob ? <span style={{color:"red"}}>{formik.errors.dob}</span> : null
                        }
                        <div className="col-lg-4">
                            <label>Phone</label>
                            <input name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="number" className={`form-control ${formik.touched.phone && formik.errors.phone?"error-box" : ""} ${formik.touched.phone && !formik.errors.phone ? "success-box" : ""}`}/>
                        </div>
                        {
                            formik.touched.phone && formik.errors.phone ? <span style={{color:"red"}}>{formik.errors.phone}</span> : null
                        }
                        <div className="col-lg-4">
                            <label>Gender</label>
                            <select name="gender" value={formik.values.gender} onChange={formik.handleChange} className="form-control">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div>
                            <input type="submit" className="btn btn-primary"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Createuser