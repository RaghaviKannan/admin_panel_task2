import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchdata()
  }, [])

  let fetchdata = async () => {
    try {
      setLoading(true)
      const users = await axios.get('https://634c0872317dc96a308fd6f9.mockapi.io/users')
      setUsers(users.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  let deleteuser = async(user) => {
    let ans= window.confirm("Are you sure you want to delete the user?")
    if(ans){
      await axios.delete(`https://634c0872317dc96a308fd6f9.mockapi.io/users/${user}`)
      alert("User is deleted")
      fetchdata()
    }
  }
  return (
    <div>
      {
        loading ? "loading data....." : <div className="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Users</h1>
            <Link to="/user_create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
              class="fas fa-download fa-sm text-white-50"></i>Create user</Link>
          </div>
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Country</th>
                      <th>State</th>
                      <th>City</th>
                      <th>Date of Birth</th>
                      <th>Phone</th>
                      <th>Gender</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Country</th>
                      <th>State</th>
                      <th>City</th>
                      <th>Date of Birth</th>
                      <th>Phone</th>
                      <th>Gender</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  {
                    users.map((user, index) => {
                      return <tbody>
                        <tr>
                          <th>{index+1}</th>
                          <td>{user.firstname}</td>
                          <td>{user.lastname}</td>
                          <td>{user.email}</td>
                          <td>{user.country}</td>
                          <td>{user.state}</td>
                          <td>{user.city}</td>
                          <td>{user.dob}</td>
                          <td>{user.phone}</td>
                          <td>{user.gender}</td>
                          <td>
                            <Link to={`/users/user_view/${user.id}`} state={{ from: "id" }} className='btn btn-warning'>View</Link>
                            <Link to={`/users/user_edit/${user.id}`} className='btn btn-primary'>Edit</Link>
                            <button onClick={() => deleteuser(user.id)} className='btn btn-danger'>Delete</button>
                          </td>
                        </tr>
                      </tbody>
                    })
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default Users