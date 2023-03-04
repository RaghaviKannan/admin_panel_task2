import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Viewuser() {
    const params = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        userdata()
    })
    let userdata = async () => {
        try {
            const user = await axios.get(`https://634c0872317dc96a308fd6f9.mockapi.io/users/${params.id}`)
            setUser(user.data)
        } catch (error) {
            console.log(error)
        }}
    return (
        <div className="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">User details</h1>
            </div>
            <form>
                <div className='container'>
                    <div class="row">
                        <div class="col-lg-4">
                            <label>First name</label>
                            <div><b style={{ color: 'blue' }}>{user.firstname}</b></div>
                        </div>
                        <div class="col-lg-4">
                            <label>Last name</label>
                            <div><b style={{ color: 'blue' }}>{user.lastname}</b></div>
                        </div>
                        <div class="col-lg-4">
                            <label>Email</label>
                            <div><b style={{ color: 'blue' }}>{user.email}</b></div>
                        </div>
                        <div class="col-lg-4">
                            <label>Country</label>
                            <div><b style={{ color: 'blue' }}>{user.country}</b></div>
                        </div>
                        <div class="col-lg-4">
                            <label>State</label>
                            <div><b style={{ color: 'blue' }}>{user.state}</b></div>
                        </div>
                        <div class="col-lg-4">
                            <label>City</label>
                            <div><b style={{ color: 'blue' }}>{user.city}</b></div>
                        </div>
                        <div class="col-lg-4">
                            <label>Date of Birth</label>
                            <div><b style={{ color: 'blue' }}>{user.dob}</b></div>
                        </div>
                        <div class="col-lg-4">
                            <label>Phone</label>
                            <div><b style={{ color: 'blue' }}>{user.phone}</b></div>
                        </div>
                        <div class="col-lg-4">
                            <label>Gender</label>
                            <div><b style={{ color: 'blue' }}>{user.gender}</b></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Viewuser