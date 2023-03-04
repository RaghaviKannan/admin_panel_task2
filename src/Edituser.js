import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'

function Edituser() {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        fetchdata();
      }, []);
      
      let fetchdata = async () => {
        try {
          const user = await axios.get(`https://634c0872317dc96a308fd6f9.mockapi.io/users/${id}`);
          setUser(user.data);
        } catch (error) {
          console.log(error);
        }
      };
      const formik = useFormik({
        initialValues: {
          firstname: '',
          lastname: '',
          email: '',
          country: '',
          state: '',
          city: '',
          dob: '',
          phone: '',
          gender: ''
        },
        onSubmit: async (values) => {
          try {
            await axios.put(`https://634c0872317dc96a308fd6f9.mockapi.io/users/${id}`, values)
            formik.resetForm()
            alert("User is updated")
          } catch (error) {
            console.log(error)
          }
        }
      })
    
      useEffect(() => {
        if (user) {
          formik.setValues({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            country: user.country,
            state: user.state,
            city: user.city,
            dob: user.dob,
            phone: user.phone,
            gender: user.gender
          })
        }
      }, [user])
      
      
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Edit user</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>First name</label>
                            <input name="firstname" type="text" className="form-control" value={formik.values.firstname} onChange={formik.handleChange}/>
                        </div>
                        <div className="col-lg-4">
                            <label>Last name</label>
                            <input name="lastname" type="text" className="form-control" value={formik.values.lastname} onChange={formik.handleChange}/>
                        </div>
                        <div className="col-lg-4">
                            <label>Email</label>
                            <input name="email" type="email" className="form-control" value={formik.values.email} onChange={formik.handleChange}/>
                        </div>
                        <div className="col-lg-4">
                            <label>Country</label>
                            <select className="form-control" name="country" value={formik.values.country} onChange={formik.handleChange}>
                                <option value="">-select-</option>
                                <option value="India">India</option>
                                <option value="America">America</option>
                                <option value="China">China</option>
                            </select>
                        </div>
                        <div className="col-lg-4">
                            <label>State</label>
                            <select className="form-control" name="state" value={formik.values.state} onChange={formik.handleChange}>
                                <option value="">-select-</option>
                                <option value="India">India</option>
                                <option value="America">America</option>
                                <option value="China">China</option>
                            </select>
                        </div>
                        <div className="col-lg-4">
                            <label>City</label>
                            <select className="form-control" name="city" value={formik.values.city} onChange={formik.handleChange}>
                                <option value="">-select-</option>
                                <option value="India">India</option>
                                <option value="America">America</option>
                                <option value="China">China</option>
                            </select>
                        </div>
                        <div className="col-lg-4">
                            <label>Date of Birth</label>
                            <input type="date" className="form-control" name="dob" value={formik.values.dob} onChange={formik.handleChange}/>
                        </div>
                        <div className="col-lg-4">
                            <label>Phone</label>
                            <input type="number" className="form-control" name="phone" value={formik.values.phone} onChange={formik.handleChange}/>
                        </div>
                        <div className="col-lg-4">
                            <label>Gender</label>
                            <select className="form-control" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div>
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Edituser