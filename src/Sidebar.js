import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughWink} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Sidebar() {
    return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                <FontAwesomeIcon icon={faLaughWink} />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <Link to="/dashboard" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>
            <hr className="sidebar-divider"/>
                <div className="sidebar-heading">
                    Addons
                </div>
                <li className="nav-item active">
                    <Link to="/users" className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Users</span></Link>
                </li>
                <li className="nav-item active">
                    <Link to="/products"className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Products</span></Link>
                </li>
        </ul>
        </>
}

export default Sidebar