import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Topbar() {
    return <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <form
            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                    aria-label="Search" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
            </div>
        </form>

        <ul className="navbar-nav ml-auto">

            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon={faBell} />

                    <span className="badge badge-danger badge-counter">3+</span>
                </a>
            </li>

            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <span className="badge badge-danger badge-counter">7</span>
                </a>
            </li>

            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                    <img className="img-profile rounded-circle"
                        src="https://picsum.photos/200/300"/>
                </a>
            </li>
        </ul>
    </nav>
}

export default Topbar